const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('../db/db.json').then((data) =>
     res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
    const {title,content} = req.body;
    if (title && content) {
        const newNote = {
            title,
            content
        };
        readAndAppend(newNote, "../db/db.json");
    } 
});

module.exports = notes;