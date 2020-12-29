const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=78c970c75096e0c22d50f66617df8dca&query=40,-75&units=m`;

const request = http.request(url, (resp) => {

    let data = '';

    resp.on('data', (chunk) => {
        data += chunk.toString();
    });

    resp.on('end', () => {
        const body = JSON.parse(data);
    })

})

request.on('error', (error) => {
    console.log('Your error:', error);
})

request.end();