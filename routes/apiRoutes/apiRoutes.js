const router = require('express').Router();
const { createNote, validateNote, deleteNote } = require('../../lib/notes');
const db = require('../../db/db');

// GET request
router.get('/notes', (req, res) => {
    return res.json(db);
});

// POST request
router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is incorrectly formatted.');
    } else {
        const note = createNote(req.body, db);
        res.json(note);
    }
});

// Bonus - DELETE request
router.delete('/notes:id', (req, res) => {
    db = deleteNote(req.params.id, db);
    res.json(db)
});

module.exports = router;