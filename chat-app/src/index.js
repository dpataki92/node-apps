const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

// define paths for express server config
const publicDirectoryPath = path.join( __dirname, "../public");

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
     console.log("new web socket connection");

    socket.emit("message", "Welcome!");
    socket.broadcast.emit("message", "A new user has joined!");

    socket.on("sendMessage", (newMessage) => {
        io.emit("message", newMessage);
    });

    socket.on("disconnect", () => {
        io.emit("message", "A user has left!")
    });

    socket.on("sendLocation", (location) => {
        io.emit("message", `https://google.com/maps?q=${location.latitude + "," + location.longitude}`);
    })
});



server.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`)
});