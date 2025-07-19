
exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('refresh_token', {
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });

        return res.status(200).json({
            message: "Logged out successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}