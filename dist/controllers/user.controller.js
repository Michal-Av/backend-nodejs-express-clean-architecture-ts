"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.logout = exports.login = exports.signup = void 0;
const csurf_1 = __importDefault(require("csurf"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = require("../services/user.service");
const mailService_1 = require("../utils/mailService");
// Initialize CSRF protection middleware
const csrfProtection = (0, csurf_1.default)({ cookie: true });
async function signup(req, res) {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await (0, user_service_1.getUserByEmailUC)(email);
        if (existingUser) {
            res.status(400).json({ message: "User with this email already exists" });
            return;
        }
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create the user
        const newUser = await (0, user_service_1.createUserUC)({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: "User created successfully", user: newUser });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.signup = signup;
async function login(req, res) {
    const { email, password } = req.body;
    try {
        // Validate credentials and authenticate user
        const user = await (0, user_service_1.getUserByEmailUC)(email);
        if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }
        // Generate JWT
        const accessToken = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
        // Set JWT as HTTP-only cookie
        res.cookie("token", accessToken, {
            httpOnly: true,
            // You can add additional options here, such as secure: true for HTTPS
        });
        // Send the CSRF token as part of the response
        res.json({ message: "Login successful", csrfToken: req.csrfToken() });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.login = login;
async function logout(req, res) {
    // You can implement logout logic here if needed
    // For example, clearing the token on the client-side
    res.status(200).json({ message: "Logout successful" });
}
exports.logout = logout;
async function forgotPassword(req, res) {
    const { email } = req.body; // Assuming email is sent in the request body
    try {
        // Generate a reset password token
        const resetToken = jsonwebtoken_1.default.sign({ email }, process.env.RESET_TOKEN_SECRET, { expiresIn: '1h' });
        console.log(email);
        // Send reset password email
        await (0, mailService_1.sendResetPasswordEmail)(email, resetToken);
        res.status(200).json({ message: 'Reset password email sent successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
}
exports.forgotPassword = forgotPassword;
async function resetPassword(req, res) {
    const { token, newPassword } = req.body;
    try {
        // Verify the reset password token
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.RESET_TOKEN_SECRET);
        // Hash the new password
        const hashedPassword = await bcrypt_1.default.hash(newPassword, 10);
        // Update user's password in the database
        await (0, user_service_1.updateUserPasswordUC)(decodedToken.email, hashedPassword);
        res.status(200).json({ message: 'Password reset successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
}
exports.resetPassword = resetPassword;
