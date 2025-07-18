const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const { routerLoader } = require('./routerLoader');
const cookieParser = require('cookie-parser');

const {
    bodyParserHandler,
    fourOhFourHandler,
    globalErrorHandler } = require('../shared/error/errorHandler');

async function expressLoader(app) {
    app.use(morgan('dev'));
    const allowedOrigins = [
        'http://localhost:5173',
        'https://texol-client.vercel.app'
    ];

    app.use(cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(bodyParserHandler);

    routerLoader(app);

    app.use(fourOhFourHandler);
    app.use(globalErrorHandler);
}

module.exports = { expressLoader };