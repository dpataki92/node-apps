const socket = io();

socket.on("message", (msg) => {
    console.log(msg);
});

document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("sendMessage", e.target.elements.message.value);
})  