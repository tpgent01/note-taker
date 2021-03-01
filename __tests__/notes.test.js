const fs = require('fs');
const { createNote, validateNote } = require('../lib/notes');
const db = require('../db/db.json');

jest.mock('fs');

test("Creates a new note", () => {
    const newNote = createNote(
        {
            title: "First Test Note",
            text: "blah blah"
        },
        db
    );

    expect(newNote.title).toBe("First Test Note");
    expect(newNote.text).toBe("blah blah");
});