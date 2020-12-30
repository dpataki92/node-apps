console.log('Client side js file is loaded');

fetch('http://localhost:3000/weather?address=Boston')
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