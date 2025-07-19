
exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('refresh_token', {
            path: '/',
            httpOnly: true,
            secure: true, 
            sameSite: 'None',
        }).clearCookie('refresh_token').status(200).json({
            message: "User details fetched successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}