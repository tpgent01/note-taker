const router = require('express').Router();
const path = require('path');

// GET index page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// GET Notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// If no matching route is found default to homepage
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;