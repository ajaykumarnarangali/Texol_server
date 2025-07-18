const mongoose = require('mongoose');

const userTestResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      selectedAnswer: { type: String, default:'not answered'},
      isCorrect: { type: Boolean, required: true }
    }
  ]
});

module.exports = mongoose.model('Result', userTestResultSchema);
