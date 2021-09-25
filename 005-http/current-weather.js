const http = require('http');

const defaultLocation = 'Saint Petersburg';
const location = process.argv[2] || defaultLocation;

const myApiKey = process.env.myApiKey;
const url = 'http://api.weatherstack.com';

http.get(`${url}/current?access_key=${myApiKey}&query=${location}`, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (err) => {
    console.error(`Error: ${err.message}`);
})