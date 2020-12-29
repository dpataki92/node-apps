const request = require('request');

const geocode = (address, cb) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZHBhdGFraTkyIiwiYSI6ImNrajh3Y2M0NzZ2bzYyc2xiazdpYTFwdmgifQ.qpDETULHCWqm89WCMkgQWA`;

    request({url: url, json: true}, (err, resp) => {
        if (err) {
            cb("Unable to connect to location services!", undefined);
        }
        else if (resp.body.features.length === 0) {
            cb('Could not find location. Try another search.', undefined);
        }   
        else {
            const geoData = resp.body.features[0].center;
            const name = resp.body.features[0].place_name;
            
           cb(undefined, {
               latitude: resp.body.features[0].center[1],
               longitude: resp.body.features[0].center[0],
               location: resp.body.features[0].place_name
           });
        }
    })
}

module.exports = geocode;
