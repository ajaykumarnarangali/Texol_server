const express = require('express');
const router = express.Router();
const { fourOhFiveHandler } = require('../shared/error/errorHandler');
const { userController } = require('../controller/index');
const { verifyToken } = require('../middleware/verifyUser');

router
    .route('/get-user')
    .get(verifyToken, userController.getUser)
    .all(fourOhFiveHandler);

router
    .route('/feedback')
    .post(verifyToken, userController.addFeedback)
    .all(fourOhFiveHandler);

router
    .route('/result-history')
    .post(verifyToken, userController.saveHistory)
    .all(fourOhFiveHandler);

module.exports = router;