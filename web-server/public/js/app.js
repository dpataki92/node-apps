console.log('Client side js file is loaded');



const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/weather?address=${search.value}`)
    .then((resp) => {
        resp.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                console.log(data.location, data.forecast);
            }
        })
    })
});