module.exports = app => {
    const signUpController = require('../controllers/sign-up.js');
    app.post('/signUp',signUpController.signUp);
    app.get('/signUp',signUpController.getUsers);
};
