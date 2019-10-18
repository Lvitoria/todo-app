const express = require('express');

module.exports = function(server){
    //Api ROUTES
    const router = express.Router();
    server.use('/api', router);

    //todo routes
    const todoService = require('../api/todo/todoService');
    //o resgiste vai usar todos os methods que estão no  todoService
    todoService.register(router, '/todos');

}