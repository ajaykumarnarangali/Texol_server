const { getUser } = require('./getUser');
const { addFeedback } = require('./addFeedback');

const userService = {
    getUser,
    addFeedback
}

module.exports = userService