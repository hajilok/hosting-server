const fs = require('fs');
const fetch = require('node-fetch');

const cekip = async () => {
    const ip = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json());

    const getip = ip.ip;
    const sendip = ip.ip

    return fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_89pFjkOGwVclVWc8JuhUSzgKhXImv&ipAddress=${getip}`)
        .then(response => response.json())
        .then(response => {
            const getisp = response.isp;
            const location = response.location;
            const getcountry = location.country;
            const region = location.region;
            const city = location.city;

            return {
                sendip,
                getisp,
                getcountry,
                region,
                city
            };
        });
};

const dirlocate = './data';
if (!fs.existsSync(dirlocate)) {
    fs.mkdirSync(dirlocate);

}

const filelocate = './data/contact.json';
if (!fs.existsSync(filelocate)) {
    fs.writeFileSync(filelocate, '[]', 'utf-8');

}

const contact = () => {
    const getfile = fs.readFileSync('data/contact.json', 'utf-8');
    const parsejson = JSON.parse(getfile);
    return parsejson;

}

module.exports = { contact, cekip };