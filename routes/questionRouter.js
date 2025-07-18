const express = require('express');
const router = express.Router();
const { fourOhFiveHandler } = require('../shared/error/errorHandler');
const { questionController } = require('../controller/index');
const { verifyToken } = require('../middleware/verifyUser');

router
    .route('/get-questions')
    .get(verifyToken,questionController.getQuestions)
    .all(fourOhFiveHandler);

module.exports = router;