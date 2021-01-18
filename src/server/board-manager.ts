import { Server, Socket } from "socket.io";
import { BoardState } from "../types";

const database: { [roomId: string]: BoardState } = {};

export const boardManager = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    const { roomId } = <{ roomId: string }>socket.handshake.query;
    socket.join(roomId);

    if (database[roomId]) {
      socket.emit("data", database[roomId]);
    }

    socket.on("data", (data: BoardState) => {
      database[roomId] = data;
      io.to(roomId).emit("data", data);
    });

    socket.on("disconnect", () => {
      const room = io.sockets.adapter.rooms.get(roomId);
      if (!room || !room.size) {
        delete database[roomId];
      }
    });
  });
};
