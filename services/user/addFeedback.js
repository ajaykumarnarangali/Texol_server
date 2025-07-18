const User = require('../../models/User');
const Feedback = require('../../models/Feedback');
const APIError = require('../../shared/error/APIError');

exports.addFeedback = async (userId, text) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new APIError(404, 'User not found');
    }

    const feedback = await Feedback.create({ userId, text });
    return feedback;
};
