const request = require('request');

const forecast = (latitude, longitude, cb) => {
    const url = `http://api.weatherstack.com/current?access_key=78c970c75096e0c22d50f66617df8dca&query=${latitude},${longitude}&units=m`;

    request({url, json: true}, (err, {body}) => {
        if (err) {
            cb("Unable to connect to weather services!", undefined);
        }
        else if (body.error) {
            cb(body.error.info, undefined);
        }
        else {
            const {weather_descriptions, temperature, feelslike, weather_icons, humidity, precip, wind_speed} = body.current;

            cb(undefined, {
                weather_description: weather_descriptions[0], 
                temperature,
                feelslike,
                weather_icons,
                humidity,
                precip,
                wind_speed
            })
        }
    })
}

module.exports = forecast;