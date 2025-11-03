import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import careerRoutes from "./routes/careerRoute.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
// import roadmapRoutes from "./routes/roadmapRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import faqRoutes from "./routes/faqRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import authRoutes from "./routes/authRoutes.js";
// import aiRoutes from "./routes/aiRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("controllers", path.join(__dirname, "views"));

//testing mermaid to svg conversion
app.get("/test-mermaid", (req, res) => {
  res.render("mermaidToSvg");
});
//API Routes
app.use("/api/career-guide", careerRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/roadmap", roadmapRoutes);

//Base Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/message", (req, res) => {
  const { name } = req.body;
  res.json({ reply: `Hello, ${name}! This is a response from the backend.` });
  console.log(req.body);
});

export default app;
