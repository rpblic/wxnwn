var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    date:Date,
    task:String,
    done:Boolean
  })

  module.exports = mongoose.model("todo", todoSchema, "testCollection");