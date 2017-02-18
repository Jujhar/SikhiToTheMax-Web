const express = require('express');
const template = require('./template');

const app = express();

// builds the template by injecting required tags
function buildTemplate (req) {
  return template();
}

// use client for static files
app.use(express.static(`${__dirname}/../dist`));

// direct all calls to index template
app.get('*', (req, res) => res.send(buildTemplate(req)));

// listen
app.listen('8080', (...args) => console.log(args));
