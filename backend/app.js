import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";

// ===== Load env ONLY locally =====
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// ===== Setup paths =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Create app =====
const app = express();

// ===== CORS =====
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// ===== Middleware =====
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ===== View Engine =====
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ===== Sessions (Vercel-safe) =====
app.use(
  session({
    name: "connect.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    },
  }),
);

/* ===========================
   AUTH ROUTES – USER
=========================== */

// REGISTER
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address." });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(409)
        .json({ success: false, message: "User already exists." });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });

    res.json({ success: true, message: "User registered successfully." });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Signup failed." });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });

    req.session.regenerate((err) => {
      if (err)
        return res
          .status(500)
          .json({ success: false, message: "Session error." });

      req.session.userId = user._id.toString();
      res.json({ success: true, email: user.email });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Login failed." });
  }
});

// LOGOUT
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ success: true, message: "Logged out successfully." });
  });
});

/* ===========================
   ADMIN AUTH
=========================== */

app.post("/admin/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Email and password required." });

    if (password.length < 6)
      return res
        .status(400)
        .json({ success: false, message: "Password too short." });

    const exists = await Admin.findOne({ email });
    if (exists)
      return res
        .status(409)
        .json({ success: false, message: "Admin already exists." });

    const hashed = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashed });

    res.json({ success: true });
  } catch (error) {
    console.error("Admin signup error:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ success: false });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ success: false });

    req.session.regenerate((err) => {
      if (err) return res.status(500).json({ success: false });
      req.session.adminId = admin._id.toString();
      res.json({ success: true, email: admin.email });
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/admin/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ success: true });
  });
});

/* ===========================
   API ROUTES
=========================== */

app.use("/api/career-guide", requireLogin, careerRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/roadmap", requireLogin, roadmapRoutes);
app.use("/api/blogs", blogRoutes);

/* ===========================
   TEST & BASE ROUTES
=========================== */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/me", (req, res) => {
  if (!req.session?.userId)
    return res.status(401).json({ authenticated: false });

  res.json({
    authenticated: true,
    userId: req.session.userId,
  });
});

app.get("/test-mermaid", (req, res) => {
  res.render("mermaidToSvg");
});

app.post("/api/message", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ success: false });
  res.json({ success: true, reply: `Hello, ${name}!` });
});

export default app;
