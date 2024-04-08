import { addMeeting, addParticipant } from "../services/meetingService.js";
import { v4 as uuidv4 } from "uuid";

export const createMeeting = async (req, res, next) => {
  const meetingId = uuidv4();
  await addMeeting(meetingId, req.user.name);
  res.cookie("role", "host", { maxAge: 3600000 });
  res.send({
    message: "sucessfully added to meeting",
    meetingId: meetingId,
    userRole: "HOST",
  });
};

export const createParticipant = async (req, res, next) => {
  if (!req?.body?.participantName || !req?.body?.meetingId) {
    res.send({
      error: "Please provide all the require fields name and meetingId",
    });
    return;
  }

  await addParticipant(req?.body?.participantName, req?.body?.meetingId);
  res.cookie("role", "PARTICIPANT", { maxAge: 3600000 });
  res.send({
    message: "sucessfully added to meeting",
    userRole: "PARTICIPANT",
  });
};
