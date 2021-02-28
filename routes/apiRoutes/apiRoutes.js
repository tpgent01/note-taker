const router = require('express').Router();
const { deleteNote, createNote, validateNote } = require('../../lib/notes');
const db = require('../../db/db');

// GET request
router.get('/notes', function (req, res) {
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
router.delete('/notes:id', function (req, res) {
    db = deleteNote(req.params.id, db);
    res.json(db)
});


module.exports = router;