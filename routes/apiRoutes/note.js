const router = require('express').Router();
const notes = require('../../db/db');

//const for create & delete
const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunction');

//router get post delete
router
    .router('/notes')
    .get((req, res) => {
        let saved = notes;
        res, json(saved);
    })
    .post((req, res) => {
        req.body.id = notes.length.toString();
        let note = createNote(req.body, notes);
        res.json(note);
    })
    .delete((req, res) => {
        deleteNote(notes, req.params.id);
        res.json(notes);
    })

module.exports = router;