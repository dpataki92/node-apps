const fs = require('fs');

const initialUser = JSON.stringify({name: "Tamás", age: 59});
fs.writeFileSync('1-json.json', initialUser);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Daniel';
user.age = 28;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);