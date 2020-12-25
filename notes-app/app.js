const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Daniel Pataki.');
fs.appendFileSync('notes.txt', ' I am a software developer based in Budapest.');