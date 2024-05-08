"use strict";
//routes/city.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const userController = require('../controllers/user.controller');
const { validateSignup, } = require('../validations/user.validation');
const router = express_1.default.Router();
exports.userRoutes = router;
// Route for userModel
router.post('/signup', validateSignup, userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
