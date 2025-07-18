const Question = require('../../models/Question');
const APIError = require('../../shared/error/APIError');
const { shuffleArray } = require('../../utils/shuffleArray');

exports.getQuestions = async () => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
        const shuffled = questions.map((qn) => {
            return { ...qn, answers: shuffleArray(qn.answers) }
        });
        return shuffled;
    } catch (error) {
        throw new APIError("Failed to fetch questions", 500);
    }
};