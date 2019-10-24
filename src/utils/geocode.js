const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmFxaWhtb25zenRlciIsImEiOiJjazIwNzlzZjQwbWE0M25tZmI0dHZlb2ZqIn0.93hPMERxsuNWme2sTC3OdQ&limit=1'
    
    request({ url, json: true }, (error, { body } ={}) => {

        if (error) {
            callback('Unable to connect to GeoMap!', undefined);
        } else if (!body.features || body.features.length === 0) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
            latitude: body.features[0].center[1],
            longtitude: body.features[0].center[0],
            location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode;