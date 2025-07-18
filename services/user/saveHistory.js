const User = require('../../models/User');
const Result = require('../../models/Result');
const APIError = require('../../shared/error/APIError');

exports.saveHistory = async (userId, body) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new APIError(404, 'User not found');
    }
    const payLoad = {
        userId,
        score: body?.score,
        completedAt: body?.completedAt,
        answers: body?.answers
    }

    const result = new Result(payLoad);

    const saved = await result.save();

    return !!saved;
}