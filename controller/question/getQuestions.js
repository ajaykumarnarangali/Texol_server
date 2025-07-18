const APIError = require('../../shared/error/APIError');
const questionService = require('../../services/question/index.js');

exports.getQuestions = async (req, res, next) => {
    try {
        const { id } = req.user;
        if (!id) {
            return next(APIError(403, "invalid credentials"));
        }

        const questions = await questionService.getQuestions();

        if (!questions) {
            res.status(200).json({
                message: "questions fetching failed",
                success: false,
            })
        }

        res.status(200).json({
            message: "questions fetched successfully",
            success: true,
            questions
        })

    } catch (error) {
        next(error)
    }
}