const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

//reads the db.json file when a get request is made to notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
     res.json(JSON.parse(data)));
});

//updates the database with a post request 
notes.post('/', (req,res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, "./db/db.json");

        const response = {
            status: 'success',
            body: newNote,
          };
      
          res.json(response);
        } else {
          res.json('Error posting note');
        }
});
//if the note id is sent with a delete request, it will delete the note from the JSON file
notes.delete('/:id', (req , res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.id !== noteID);
            writeToFile('./db/db.json', result);
            res.json(result);
        })
})

module.exports = notes;