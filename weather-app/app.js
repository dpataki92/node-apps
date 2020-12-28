const request = require('request');
const chalk = require('chalk');

const url = "http://api.weatherstack.com/current?access_key=78c970c75096e0c22d50f66617df8dca&query=37.8267,-122.4233&units=f";

request({url: url, json: true}, (err, resp) => {
    resp.body.current.weather_descriptions.forEach(e => {
        console.log(chalk.green(e));
    });
    console.log(`It is currently ${resp.body.current.temperature} degrees out. It feels like ${resp.body.current.feelslike} degrees.`);
})

const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHBhdGFraTkyIiwiYSI6ImNrajh3Y2M0NzZ2bzYyc2xiazdpYTFwdmgifQ.qpDETULHCWqm89WCMkgQWA";

request({url: geoCodeURL, json: true}, (err, resp) => {
    const geoData = resp.body.features[0].center;
    const name = resp.body.features[0].place_name;
    
    console.log(chalk.red(name), chalk.green(`Latitude: ${geoData[1]}, Longitude: ${geoData[0]}`));
})