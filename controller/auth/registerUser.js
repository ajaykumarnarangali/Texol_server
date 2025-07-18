const APIError = require('../../shared/error/APIError');
const { validateWithSchema } = require('../../utils/schemaValidation');
const userSignupSchema = require('../../validators/signupSchema');
const authService = require('../../services/auth/index');

exports.registerUser = async (req, res, next) => {

    const { error } = validateWithSchema(userSignupSchema, req.body);
    if (error) {
        return next(new APIError(400, error.details[0].message));
    }
    try {
        const newUser = await authService.registerUser(req.body);
        res.status(201).json({
            message: 'user registered successfully',
            success: true,
            user: newUser
        })
    } catch (error) {
        next(error)
    }
}

