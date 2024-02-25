const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  resultTitle: {
    type: String,
    enum: ["perfect", "good", "pending", "average", "poor"] ,
    default: "pending"
  },
  userId: { type: String, required: true },
  questions: [],
  answers: [],
  totalScore: { type: Number,  default: 0 },
  correctCount: { type: Number,  default: 0 },
  incorrectCount: { type: Number, default: 0 },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;


