const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jkawa2004:swamiji99@cluster0.7hfurw4.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo : todo
}