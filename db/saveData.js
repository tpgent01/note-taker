const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid'); // Newest update

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Save {
    write(note) {
        return writeNote("db/db.json", JSON.stringify(note));
    }

    read() {
      return readNote("db/db.json", "utf8");
    }

    getNotes() {
      return this.read().then(notes => {
        let parsedNotes;

        // If notes isn't an array or can't be turned into one, send back a new empty array
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
        return parsedNotes;
      });
    }

    addNote(note) {
      const { title, text } = note;

      if (!title || !text) {
        throw new Error("Note title and text cannot be blank.");
      }

      // Add a unique id to the note using uuid package
      const newNote = { title, text, id: uuidv4() };

      // Get all notes, add the new note, write all the updated notes, return the newNote
      return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);
    }

    // BONUS - Delete note function
    deleteNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Save();