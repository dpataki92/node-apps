console.log('Client side js file is loaded');



const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");
const weatherIcon = document.getElementById("weatherIcon");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    weatherIcon.src = "";
    messageOne.textContent = "Loading...";
    messageTwo.querySelector("#forecast").textContent = "";
    messageTwo.querySelector("#additional").textContent = "";

    fetch(`/weather?address=${search.value}`)
    .then((resp) => {
        resp.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            }
            else {
                weatherIcon.src = data.icon;
                messageOne.textContent = data.location;
                messageTwo.querySelector("#forecast").textContent = data.forecast;
                messageTwo.querySelector("#additional").textContent = data.additional;
            }
        })
    })
});