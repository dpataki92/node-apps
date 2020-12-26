const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

const log = console.log;

// customize yargs version
yargs.version('1.1.0');

// add, remove, read, list
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: () => {
        console.log("Adding a new note");
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: () => {
        console.log("Removing a note");
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log("Listing the notes");
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Reading a note");
    }
})

log(yargs.argv);