const { getUser } = require('./getUser');
const { addFeedback } = require('./addFeedback');
const { saveHistory } = require('./saveHistory');

const userService = {
    getUser,
    addFeedback,
    saveHistory
}

module.exports = userService