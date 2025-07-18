const { registerUser } = require('./registerUser');
const { loginUser } = require('./loginUser');
const { refreshToken } = require('./refreshToken');

const authService = {
    registerUser,
    loginUser,
    refreshToken
}

module.exports = authService;