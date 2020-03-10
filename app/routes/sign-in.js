module.exports = app => {
    const signInController = require('../controllers/sign-in.js');
    app.post('/signIn',signInController.signIn);
};
