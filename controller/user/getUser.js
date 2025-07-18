const APIError = require('../../shared/error/APIError');
const userService = require('../../services/user/index');

exports.getUser = async (req, res, next) => {
    try {
        const { id } = req.user;
        if (!id) {
            return next(APIError(403, "invalid credentials"));
        }

        const user = await userService.getUser(id);

        res.status(200).json({
            message: "user details fetched successfully",
            success: true,
            user
        })

    } catch (error) {
        next(error)
    }
}