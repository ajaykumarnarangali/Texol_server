const APIError = require('../../shared/error/APIError');
const userService = require('../../services/user/index');

exports.addFeedback = async (req, res, next) => {
    try {
        if (!req.user.id) {
            return next(new APIError(403, "invalid credentials"));
        }
        const { id } = req.user;
        console.log(id,req.body);
        if (!req.body.text) {
            return next(new APIError(403, "invalid data"));
        }
        const { text } = req.body;

        await userService.addFeedback(id, text);

        res.status(200).json({
            message: "user feedback addedd successfully",
            success: true
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}