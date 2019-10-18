const mongoose = require('mongoose');
//para tirar aquela mensagem de advergencia só utilizar
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(`mongodb://localhost:27017/todo`);

