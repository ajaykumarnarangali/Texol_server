
exports.logoutUser = async (req, res, next) => {
    try {
        return res.clearCookie('refresh_token').status(200).json({
            message: "User details fetched successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}