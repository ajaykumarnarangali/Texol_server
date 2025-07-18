const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    value: { type: String, required: true },
    isTrue: { type: Boolean, required: true }
}, { _id: false });

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: [answerSchema], required: true }
});

module.exports = mongoose.model('Questions', questionSchema);