const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Let's make something good</h2>`)
});


module.exports = server;
