const router = require('express').Router();
const path = require('path');

// GET request
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// If no matching route is found, default to homepage
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// GET Notes request
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});


module.exports = router;