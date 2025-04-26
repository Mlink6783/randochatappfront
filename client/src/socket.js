// src/socket.js
import { io } from "socket.io-client";

const socket = io("https://randomvideochatserver.onrender.com", {
  transports: ["websocket"],
});

export default socket;
