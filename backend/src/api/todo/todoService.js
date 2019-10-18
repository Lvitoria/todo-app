const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
//new: true significa tem que usar essa linha porque se não o update vai te mostrar o dados antigo ou seja que ainda não foi alterado
// runValidators: true significa que ele vai validar as regras de negocio exemplo require: true
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;