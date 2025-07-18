const authController = require('./auth/index');
const userController = require('./user/index');
const questionController = require('./question/getQuestions');


module.exports = {
    authController,
    userController,
    questionController
}