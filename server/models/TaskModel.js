const { Schema, model } = require('mongoose');

const Task = new Schema({
    text: {type: String, required: true},
    done: {type: Boolean},
    like: {type: Boolean}
})

module.exports = model('Task', Task)
