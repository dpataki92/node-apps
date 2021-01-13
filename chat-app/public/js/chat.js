const socket = io();

socket.on("message", (msg) => {
    console.log(msg);
});

document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("sendMessage", e.target.elements.message.value, (error) => {
        if (error) {
            return console.log(error)
        }

        console.log("Message delivered!");
    });
});

document.getElementById("send-location").addEventListener("click", () => {
    if (!navigator.geolocation) {
        return alert("Geolocation is not supported by your browser.")
    }
    
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit("sendLocation", {
            longitude: position.coords.longitude, 
            latitude: position.coords.latitude
        }, (error) => {

            if (error) {return console.log(error)}

            console.log("Location shared!");
        });
    });
});
