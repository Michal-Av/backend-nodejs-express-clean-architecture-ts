"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetPasswordEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'michalrht1@gmail.com',
        pass: 'doolatcdfgeipbxy',
    },
});
async function sendResetPasswordEmail(email, resetToken) {
    try {
        const mailOptions = {
            from: 'noreply@hello.com',
            to: email,
            subject: 'Password Reset',
            html: `<h2>Please click on the link to reset your password:</h2>
      <p>${process.env.CLIENT_URL}/reset-password/${resetToken}</p>`,
        };
        await transporter.sendMail(mailOptions);
        console.log('Reset password email sent successfully');
    }
    catch (error) {
        console.error('Error sending reset password email:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
exports.sendResetPasswordEmail = sendResetPasswordEmail;
