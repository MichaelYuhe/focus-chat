import { io } from "socket.io-client";

io.on("connection", (socket) => {
    console.log("connected");
    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});