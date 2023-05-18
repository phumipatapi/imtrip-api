const mongoose = require("mongoose");
const WebSocket = require("ws");
const Message = require("./schemas/message_schema");
const connect = require("./core/connect");

const webSocketInitialize = (server) => {
  const wss = new WebSocket.Server({ server });

  const clients = new Map();

  // Handle WebSocket connections
  wss.on("connection", (ws, req) => {
    // Handle incoming WebSocket messages
    ws.on("message", (message) => {
      const url = req.url.substr(1).split("/");
      const chatRoomId = url[0];
      const sender = url[1];

      // Associate the chat room ID with the WebSocket client
      clients.set(ws, chatRoomId);

      // Save the message to the database
      const newMessage = new Message({
        chat_room_id: chatRoomId,
        sender: sender,
        content: message,
      });

      connect().then(async (mongoose) => {
        try {
          await newMessage
            .save()
            .then(() => {
              // Broadcast the message to all connected clients in the same chat room
              wss.clients.forEach((client) => {
                const messageObject = {
                  chat_room_id: newMessage.chat_room_id,
                  sender: newMessage.sender,
                  content: newMessage.content,
                  timestamp: newMessage.timestamp,
                };

                const jsonStringMessage = JSON.stringify(messageObject);

                if (
                  client.readyState === WebSocket.OPEN &&
                  clients.get(client) === chatRoomId
                ) {
                  client.send(jsonStringMessage);
                }
              });
            })
            .catch((error) => {
              console.error("Error saving message:", error);
            });
        } catch (err) {
          console.error("Error saving message:", error);
        } finally {
          mongoose.connection.close();
        }
      });
    });
  });
};

module.exports = { webSocketInitialize };
