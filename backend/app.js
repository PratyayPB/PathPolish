import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import careerRoutes from "./routes/careerRoute.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import Admin from "./models/adminModel.js";
import blogRoutes from "./routes/blogsRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { requireLogin } from "./middleware/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Middleware

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ must match React URL exactly
    credentials: true, // ✅ allow cookies from frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  }),
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("controllers", path.join(__dirname, "views"));

// Sessions
app.use(
  session({
    name: "connect.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/PathPolish",
    }),
    cookie: {
      httpOnly: true,
      maxAge: 86400000,
      sameSite: "lax",
      secure: false,
    },
  }),
);

// REGISTER or SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });
    console.log("User registered:", email);

    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error in signup:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    // Handle bcrypt errors
    if (error.message?.includes("bcrypt")) {
      return res.status(500).json({
        success: false,
        message: "Error processing password. Please try again.",
      });
    }

    // Handle database errors
    if (
      error.name === "MongoNetworkError" ||
      error.name === "MongooseServerSelectionError"
    ) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (e) => e.message,
      );
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: validationErrors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// USER LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // 🔐 REGENERATE SESSION (security)
    req.session.regenerate((err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Session error" });
      }

      req.session.userId = user._id.toString();

      res.json({
        success: true,
        message: "Login successful",
        email: user.email,
      });
    });
  } catch (error) {
    console.error("Error in login:", error);

    // Handle bcrypt errors
    if (error.message?.includes("bcrypt")) {
      return res.status(500).json({
        success: false,
        message: "Error verifying password. Please try again.",
      });
    }

    // Handle database errors
    if (
      error.name === "MongoNetworkError" ||
      error.name === "MongooseServerSelectionError"
    ) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Login failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// LOGOUT
app.post("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({
          success: false,
          message: "Logout failed. Please try again.",
        });
      }

      res.clearCookie("connect.sid", { httpOnly: true, sameSite: "lax" });
      res.json({ success: true, message: "Logged out successfully" });
    });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({
      success: false,
      message: "Logout failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

//ADMIN AUTHENTICATION

// REGISTER or SIGNUP
app.post("/admin/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    //Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists.",
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashed });
    console.log("Admin registered:", email);

    res.json({ success: true, message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error in admin signup:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists.",
      });
    }

    // Handle bcrypt errors
    if (error.message?.includes("bcrypt")) {
      return res.status(500).json({
        success: false,
        message: "Error processing password. Please try again.",
      });
    }

    // Handle database errors
    if (
      error.name === "MongoNetworkError" ||
      error.name === "MongooseServerSelectionError"
    ) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (e) => e.message,
      );
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: validationErrors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Admin registration failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

//Login
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }
    req.session.regenerate((err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Session error" });
      }
      req.session.adminId = admin._id.toString();
      res.json({ success: true, email: admin.email });
    });

    // req.session.adminId = admin._id.toString(); // store session
    // console.log("Admin logged in:", email);

    // res.json({ success: true, email: admin.email });
  } catch (error) {
    console.error("Error in admin login:", error);

    // Handle bcrypt errors
    if (error.message?.includes("bcrypt")) {
      return res.status(500).json({
        success: false,
        message: "Error verifying password. Please try again.",
      });
    }

    // Handle database errors
    if (
      error.name === "MongoNetworkError" ||
      error.name === "MongooseServerSelectionError"
    ) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Admin login failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// LOGOUT
app.post("/admin/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying admin session:", err);
        return res.status(500).json({
          success: false,
          message: "Logout failed. Please try again.",
        });
      }

      res.clearCookie("connect.sid");
      res.json({ success: true, message: "Admin logged out successfully" });
    });
  } catch (error) {
    console.error("Error in admin logout:", error);
    res.status(500).json({
      success: false,
      message: "Logout failed. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

//testing mermaid to svg conversion
app.get("/test-mermaid", (req, res) => {
  res.render("mermaidToSvg");
});

//API Routes
app.use("/api/career-guide", requireLogin, careerRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/roadmap", requireLogin, roadmapRoutes);
app.use("/api/blogs", blogRoutes);

//Base Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/me", (req, res) => {
  if (!req.session?.userId) {
    console.log("User not authenticated");
    return res.status(401).json({ authenticated: false });
  }

  console.log("User authenticated");
  if (req.session.userId) {
    console.log("User ID:", req.session.userId);
    console.log("Session ID:", req.session.id);
    res.json({
      authenticated: true,
      userId: req.session.userId,
    });
  }
});

app.post("/api/message", (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      });
    }

    res.json({
      success: true,
      reply: `Hello, ${name}! This is a response from the backend.`,
    });
    console.log("Message request:", req.body);
  } catch (error) {
    console.error("Error in /api/message:", error);
    res.status(500).json({
      success: false,
      message: "Error processing message.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

export default app;
