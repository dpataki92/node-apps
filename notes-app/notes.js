const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green("New note added"));
    }
    else {
        console.log(chalk.red("Note title taken"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

}

const removeNote = (title) => {
    const notes = loadNotes();

    const noteToRemove = notes.find(n => n.title === title);

    if (noteToRemove) {
        saveNotes(notes.filter(note => note.title !== noteToRemove.title));
        console.log(chalk.green(`${noteToRemove.title} has been removed`));
    }
    else {
        console.log(chalk.red("No note found with this title"));
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green.bold("Your notes:"));

    notes.forEach(note => {
        console.log(chalk.yellow(note.title), chalk.blue(note.body));
    });
}

const readNote = (title) => {
    const notes = loadNotes();

    try {
        const note = notes.find(note => note.title === title);
        console.log(chalk.green.bold(note.title), note.body);
    }
    catch (e) {
        console.log(chalk.red(e));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } 
    catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};