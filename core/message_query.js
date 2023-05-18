const connect = require("./connect");
const messageSchema = require("../schemas/message_schema");

module.exports = {
    getAllChatByRoomIDQuery: async (roomID) => {
    return connect().then(async (mongoose) => {
      let response = {
        success: false,
        payload: {},
      };
      try {
        let dataResult = await messageSchema.find(
          { chat_room_id: roomID },
          "-__v"
        );
        response.payload.data = dataResult;
        response.success = true;
      } catch (err) {
        response.success = false;
      } finally {
        mongoose.connection.close();
        return response;
      }
    });
  },
};
