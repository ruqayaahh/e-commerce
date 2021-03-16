const { Router } = require('express');

const { validateSignUp, checkIfUserExists, validateLogin } = require('../middlewares');

const { registerUser, loginUser } = require('../controllers');

const userRouter = Router();

userRouter.post('/register', validateSignUp, checkIfUserExists, registerUser);
userRouter.post('/login', validateLogin, loginUser);

module.exports = userRouter;
