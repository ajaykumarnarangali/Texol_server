const APIError = require('../../shared/error/APIError');
const { validateWithSchema } = require('../../utils/schemaValidation');
const userLoginSchema = require('../../validators/loginSchema');
const authService = require('../../services/auth/index');


exports.loginUser = async (req, res, next) => {

    const { error } = validateWithSchema(userLoginSchema, req.body);

    if (error) {
        return next(new APIError(400, error.details[0].message));
    }

    try {

        const result = await authService.loginUser(req.body);

        return res.cookie('refresh_token', result.refresh_token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: '/'
        }).status(201).json({
            message: "user logged in succsessfully",
            success: true,
            access_token: result.access_token
        })

    } catch (error) {
        next(error);
    }

}