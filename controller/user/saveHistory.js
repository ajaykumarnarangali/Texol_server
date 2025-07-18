const APIError = require('../../shared/error/APIError');
const userService = require('../../services/user/index');

exports.saveHistory = async (req, res, next) => {
    try {
        const { id } = req.user;
        if (!id) {
            return next(APIError(403, "invalid credentials"));
        }

        const success = await userService.saveHistory(id, req.body);
        
        if(!success){
            return next(APIError(401, "failed to save user data"));
        }

        res.status(200).json({
            message: "user result saved successfully",
            success: true
        })

    } catch (error) {
        next(error)
    }
}