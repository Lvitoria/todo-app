const port = 3003
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
//ele fez na aula 
// const allowCors = require('./cors');
// server.use(allowCors);

const cors = require('cors');

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`servidor subiu na porta ${port} ...`);
})

module.exports = server;