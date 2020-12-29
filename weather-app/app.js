const chalk = require('chalk');
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode("Boston", (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})

forecast(37.8267,-122.4233, (error, data) => {
    console.log("Error: ", error)
    console.log("Data: ", data)
})