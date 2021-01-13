const socket = io();

// ELEMENTS
const $messageForm = document.getElementById("message-form");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormButton = $messageForm.querySelector("button");

const $sendLocationButton = document.getElementById("send-location");


socket.on("message", (msg) => {
    console.log(msg);
});

$messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    $messageFormButton.setAttribute("disabled", "disabled");

    socket.emit("sendMessage", e.target.elements.message.value, (error) => {
        $messageFormButton.removeAttribute("disabled");
        $messageFormInput.value = "";
        $messageFormInput.focus();

        if (error) {
            return console.log(error)
        }

        console.log("Message delivered!");
    });
});

$sendLocationButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
        return alert("Geolocation is not supported by your browser.")
    }

    $sendLocationButton.setAttribute("disabled", "disabled");
    
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit("sendLocation", {
            longitude: position.coords.longitude, 
            latitude: position.coords.latitude
        }, (error) => {
            $sendLocationButton.removeAttribute("disabled");
            
            if (error) {return console.log(error)}

            console.log("Location shared!");
        });
    });
});
