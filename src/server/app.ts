import express from "express";
import compression from "compression";
import { Server } from "http";
import { Server as SocketServer } from "socket.io";
import { boardManager } from "./board-manager";

const port = process.env.PORT || 3000;

const app = express();
const server = new Server(app);
const io = new SocketServer(server);

boardManager(io);

app.use(compression());
app.use(express.static("dist"));

server.listen(port, () => {
  console.log(`Chess training app listening at http://localhost:${port}`);
});
