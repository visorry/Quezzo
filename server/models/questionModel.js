const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  questionID: {
    type: String,
    required: true,
    unique: true
  },
  languageID: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  answerIndex: {
    type: Number,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  questionImage : {
     type : String 
  },
  level : {
    type : String ,
    default : "easy"
  }
},{
    versionKey : false
});

const QuestionModel = mongoose.model('Question', questionSchema);

module.exports = QuestionModel;