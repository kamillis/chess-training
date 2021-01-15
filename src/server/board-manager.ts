import { Server } from "socket.io";

export const boardManager = (io: Server) => {
  io.on("connection", () => {
    console.log("a user connected");
  });
};
