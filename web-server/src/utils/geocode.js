const request = require('request');

const geocode = (address, cb) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZHBhdGFraTkyIiwiYSI6ImNrajh3Y2M0NzZ2bzYyc2xiazdpYTFwdmgifQ.qpDETULHCWqm89WCMkgQWA`;

    request({url, json: true}, (err, {body}) => {
        if (err) {
            cb("Unable to connect to location services!", undefined);
        }
        else if (body.features.length === 0) {
            cb('Could not find location. Try another search.', undefined);
        }   

        else {
            const {center} = body.features[0];
            const {place_name:location} = body.features[0];
            
           cb(undefined, {
               latitude: center[1],
               longitude: center[0],
               location
           });
        }
    })
}

module.exports = geocode;
