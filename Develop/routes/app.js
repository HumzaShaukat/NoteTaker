const express = require('express');
const notes = require('./notes');
const app = express();

app.use("/notes", notes);

module.exports = app;

//this page serves as the router. As of now there is only one route, but this router makes it easily maintainable 