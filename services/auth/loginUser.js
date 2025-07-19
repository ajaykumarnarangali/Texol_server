const User = require('../../models/User');
const bcrypt = require('bcrypt');
const APIError = require('../../shared/error/APIError');
const { generateToken } = require('../../utils/generateToken');

exports.loginUser = async ({ phone, password, countryCode }) => {

    const user = await User.findOne({ phone: `${countryCode} ${phone}` });
    if (!user) {
        throw new APIError(403, 'invalid phone number')
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        throw new APIError(403, 'incorrect password');
    }

    const access_token = generateToken(
        { id: user._id, role: user.role },
        process.env.ACCESS_SECRET,
        '15m'
    );

    const refresh_token = generateToken(
        { id: user._id },
        process.env.REFRESH_SECRET,
        '7d'
    );

    const refreshToken = {
        token: refresh_token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }

    user.refreshToken = refreshToken;
    await user.save();

    return { access_token, refresh_token };

}




