// routes/meetingRoutes.js
import express from "express";
import {
  createMeeting,
  createParticipant,
} from "../controllers/meetingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/create-meeting", authMiddleware, createMeeting);
router.post("/create-participant", createParticipant);

export default router;
