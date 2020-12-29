const request = require('request');

const forecast = (latitude, longitude, cb) => {
    const url = `http://api.weatherstack.com/current?access_key=78c970c75096e0c22d50f66617df8dca&query=${latitude},${longitude}&units=m`;

    request({url: url, json: true}, (err, resp) => {
        if (err) {
            cb("Unable to connect to weather services!", undefined);
        }
        else if (resp.body.error) {
            cb(resp.body.error.info, undefined);
        }
        else {
            cb(undefined, {
                name: resp.body.location.name,
                country: resp.body.location.country,
                weather_description: resp.body.current.weather_descriptions[0], 
                temperature: resp.body.current.temperature,
                feelslike: resp.body.current.feelslike
            })
        }
    })
}

module.exports = forecast;