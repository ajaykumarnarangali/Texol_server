const express = require('express');
const router = express.Router();
const { fourOhFiveHandler } = require('../shared/error/errorHandler');
const { authController } = require('../controller/index');

router
    .route('/register')
    .post(authController.registerUser)
    .all(fourOhFiveHandler);

router
    .route('/login')
    .post(authController.loginUser)
    .all(fourOhFiveHandler);

router
    .route('/refresh-token')
    .post(authController.refreshToken)
    .all(fourOhFiveHandler);

router
    .route('/log-out')
    .get(authController.logoutUser)
    .all(fourOhFiveHandler);

module.exports = router;