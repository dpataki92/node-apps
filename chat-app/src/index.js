const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Filter = require("bad-words");
const { generateMessage, generateLocationMessage } = require("./utils/messages");
const { addUser, removeUser, getUser, getUsersInRoom} = require("./utils/users");

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

    socket.on("join", (options, cb) => {
        const {error, user} = addUser({id: socket.id, ...options});

        if (error) {
            return cb(error);
        }

        socket.join(user.room);

        socket.emit("message", generateMessage("Admin", "Welcome!"));
        socket.broadcast.to(user.room).emit("message", generateMessage("Admin", `${user.username} has joined!`));

        cb();
    })

    socket.on("sendMessage", (newMessage, cb) => {
        const user = getUser(socket.id);
        const filter = new Filter();
        
        if (filter.isProfane(newMessage)) {
            return cb("Profanity is not allowed!")
        }
  
        io.to(user.room).emit("message", generateMessage(user.username, newMessage));
        cb();
    });

    socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit("message", generateMessage("Admin", `${user.username} has left!`));
        }

    });

    socket.on("sendLocation", (location, cb) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("locationMessage", generateLocationMessage(user.username, `https://google.com/maps?q=${location.latitude + "," + location.longitude}`));
        cb();
    })
});



server.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`)
});