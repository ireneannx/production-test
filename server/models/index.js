const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/formdb', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => err ? console.log(err) : console.log("mongoDb connected..."))


module.exports.Form = require('./form')