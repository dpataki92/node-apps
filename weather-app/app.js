const request = require('request');
const chalk = require('chalk');

const url = "http://api.weatherstack.com/current?access_key=78c970c75096e0c22d50f66617df8dca&query=37.8267,-122.4233&units=f";

request({url: url, json: true}, (err, resp) => {
    resp.body.current.weather_descriptions.forEach(e => {
        console.log(chalk.green(e));
    });
    console.log(`It is currently ${resp.body.current.temperature} degrees out. It feels like ${resp.body.current.feelslike} degrees.`);
})