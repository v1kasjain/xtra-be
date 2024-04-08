let connectedClients = {};
export const handleWebSocketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("A client connected.");

    socket.on("join_room", (meetingId, userName, userRole) => {
      socket.join(meetingId);
      connectedClients[socket.id] = { userName, userRole };
      console.log(
        `${userName} joined room ${meetingId}, all connected clients are ${JSON.stringify(
          connectedClients
        )}`
      );
      socket.emit("user_id", socket.id);
      io.emit("connected_clients", connectedClients);
    });

    socket.on("start_timer", (data) => {
      const { meetingId, seconds } = data;
      // Broadcast to all clients in the room
      console.log(data);
      io.to(meetingId).emit("timer_started", seconds);
    });

    socket.on("raise_hand", (data) => {
      const { meetingId, userId } = data;
      // Broadcast to all clients in the room
      console.log("raise_hand", data);
      io.to(meetingId).emit("hand_raised", userId);
    });

    socket.on("disconnect", () => {
      console.log("A client disconnected.");
      delete connectedClients[socket.id];
      // Send the updated count to all clients whenever a client disconnects
      io.emit("connected_clients", connectedClients);
    });
  });
};
