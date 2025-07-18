
const authRouter = require('../routes/authRouter');
const userRouter = require('../routes/userRouter');
const questionRouter = require('../routes/questionRouter');

function routerLoader(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);
    app.use('/api/qns', questionRouter);
}

module.exports = {
    routerLoader
}