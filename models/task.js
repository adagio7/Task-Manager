const moongose = require('mongoose');

const TaskSchema = new moongose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,
    maxlength: [20, "Longest name is 20 characters"]
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = moongose.model('Task', TaskSchema);