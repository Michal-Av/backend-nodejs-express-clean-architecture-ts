//routes/city.routes.ts

import express, { Router } from 'express';
const userController = require('../controllers/user.controller');

const {
    validateSignup,
} = require('../validations/user.validation');

const router: Router = express.Router();

// Route for userModel
router.post('/signup', validateSignup, userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);

export { router as userRoutes };