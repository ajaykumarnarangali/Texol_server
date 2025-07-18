const jwt = require('jsonwebtoken');
const APIError = require('../shared/error/APIError');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return next(new APIError(401, 'Access token missing'));
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return next(new APIError(401, 'Invalid or expired access token'));
    }
};

