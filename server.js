const express = require('express');
const path = require('path');
const api = require('./routes/app');
const db = require('./db/db.json');
const { readAndAppend, writeToFile} = require('./helpers/fsUtils');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware to read express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('./public'));

//if /notes is called on get request, sends user to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

//sends to home page if wildcard is entered
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//listening for testing
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);