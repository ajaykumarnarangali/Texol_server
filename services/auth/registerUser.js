const User = require('../../models/User');
const bcrypt = require('bcrypt');
const APIError = require('../../shared/error/APIError');

exports.registerUser = async ({ username, email, password, phone, role, countryCode }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new APIError(403, 'User already exists with this email');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        email,
        password: hashedPassword,
        role,
        phone: `${countryCode} ${phone}`,
        image: `https://ui-avatars.com/api/?name=${username}`
    });

    const newUser = await user.save();

    const { password: pass, ...userWithoutPassword } = newUser._doc;

    return userWithoutPassword;

};


