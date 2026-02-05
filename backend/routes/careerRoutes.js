import express from "express";
import getGuide from "../controllers/careerController.js";
const router = express.Router();

router.post("/", getGuide);
export default router;
