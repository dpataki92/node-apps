const chalk = require('chalk');
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
    console.log(chalk.red("Please provide an address."));
}
else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(chalk.red(error));
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(chalk.red(error));
            }
    
            console.log(chalk.blue.bold(data.location));
            console.log(chalk.yellow(`${forecastData.weather_description}. It is currently ${forecastData.temperature} degrees out. It feels like ${forecastData.feelslike} degrees.`));
        })
    })
}



