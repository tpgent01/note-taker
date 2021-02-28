const fs = require('fs');
const path = require('path');


// Create note function
function createNote(body, db) {
    const note = body;

    let index = -1;
    db.forEach(element => {
        index++         
        element.id = index.toString();
    });
    
    db.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db , null , 2)
    );

    return note;
};


// Validate note function
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
};


// Delete note function
function deleteNote(id, db) {
    const newDb = db.filter(note => note.id !== id)
    db = newDb;
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db , null , 2))
    
    return newDb;
}


module.exports = {
    createNote,
    deleteNote,
    validateNote
};