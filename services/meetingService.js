import db from "../db.js";
const MEETING_COLLECTION = "meetings";
export const addMeeting = async (meetingId, host) => {
  try {
    async function _create(collection) {
      return await collection.insertOne({ meetingId, host });
    }
    const result = await db(MEETING_COLLECTION, _create);
    console.log(result);
    return result;
  } catch (err) {
    console.error("Error:", err);
  }
};

export const addParticipant = async (participantName, meetingId) => {
  try {
    async function _update(collection) {
      const filter = { meetingId };
      const updateDoc = {
        $push: {
          participants: participantName,
        },
      };
      return await collection.updateOne(filter, updateDoc);
    }
    const result = await db(MEETING_COLLECTION, _update);
    console.log(result);
    return result;
  } catch (err) {
    console.error("Error:", err);
  }
};
