const APIError = require('../../shared/error/APIError');
const authService = require('../../services/auth/index');

exports.refreshToken = async (req, res, next) => {

    const incoming_token = req.cookies.refresh_token;

    if (!incoming_token) {
        return next(new APIError(401, 'refresh token missing'));
    }

    try {

        const { new_access_token, new_refresh_token } = await authService.refreshToken(incoming_token);
        return res.cookie('refresh_token', new_refresh_token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000,
             path: '/'
        }).status(201).json({
            message: "token refreshed in succsessfully",
            success: true,
            access_token: new_access_token
        })

    } catch (error) {
        next(error)
    }

}

