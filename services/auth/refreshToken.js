const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const APIError=require('../../shared/error/APIError');
const { generateToken } = require('../../utils/generateToken');

const decodeToken = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret);
        return { decoded, err: null };
    } catch (err) {
        return { decoded: null, err };
    }
};

function comparetoken(incoming_token, old_token) {
    return incoming_token === old_token;
}

exports.refreshToken = async (incoming_token) => {

    const { decoded, err } = decodeToken(incoming_token, process.env.REFRESH_SECRET);

    if (err) {
        throw new APIError(401, 'Invalid or expired refresh token');
    }

    const user = await User.findById(decoded?.id);

    if (!user.refreshToken) {
        throw new APIError(403, 'Refresh token not recognized');
    }

    const isMatch = comparetoken(incoming_token, user.refreshToken.token);

    if (!isMatch || user.refreshToken.expiresAt < new Date()) {
        throw new APIError(403, 'Invalid or expired refresh token');
    }

    const new_access_token = generateToken(
        { id: decoded.id },
        process.env.ACCESS_SECRET,
        '15m'
    );

    const new_refresh_token = generateToken(
        { id: decoded.id },
        process.env.REFRESH_SECRET,
        '7d'
    );

    const newRefreshToken = {
        token: new_refresh_token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }

    user.refreshToken = newRefreshToken;
    await user.save();

    return { new_access_token, new_refresh_token }
}