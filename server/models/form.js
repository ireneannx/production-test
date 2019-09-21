const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
})

const Form = mongoose.model('Form', FormSchema, 'prashanth');

module.exports = Form