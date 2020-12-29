const chalk = require('chalk');
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
    console.log(chalk.red("Please provide an address."));
}
else {
    geocode(address, (error, {location, latitude, longitude} = {}) => {
        if (error) {
            return console.log(chalk.red(error));
        }

        forecast(latitude, longitude, (error, {weather_description, temperature, feelslike} = {}) => {
            if (error) {
                return console.log(chalk.red(error));
            }
    
            console.log(chalk.blue.bold(location));
            console.log(chalk.yellow(`${weather_description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees.`));
        })
    })
}



