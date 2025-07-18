const User = require('../../models/User');
const APIError = require('../../shared/error/APIError');

exports.getUser = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new APIError(404, 'User not found');
    }
    const { password: pass, refreshToken: r_t, ...rest } = user._doc;
    return rest;
}