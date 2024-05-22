// controllers/user.js
import { Request, Response } from 'express';
import csrf from 'csurf';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUserByEmailUC, createUserUC, updateUserPasswordUC } from '../services/user.service';
import { sendResetPasswordEmail } from '../utils/mailService';

// Initialize CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

export async function signup(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await getUserByEmailUC(email);
        if (existingUser) {
            res.status(400).json({ message: "User with this email already exists" });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await createUserUC({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
        // Validate credentials and authenticate user
        const user = await getUserByEmailUC(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }

        // Generate JWT
        const accessToken = jwt.sign(
            { userId: user.id },
            process.env.ACCESS_TOKEN_SECRET as string,
            { expiresIn: "1h" }
        );

        // Set JWT as HTTP-only cookie
        res.cookie("token", accessToken, {
            httpOnly: true,
            // You can add additional options here, such as secure: true for HTTPS
        });
        // Send the CSRF token as part of the response
        res.json({ message: "Login successful", csrfToken: req.csrfToken() });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

export async function logout(req: Request, res: Response): Promise<void> {
    // You can implement logout logic here if needed
    // For example, clearing the token on the client-side
    res.status(200).json({ message: "Logout successful" });
}

export async function forgotPassword(req: Request, res: Response): Promise<void> {
    const { email } = req.body; // Assuming email is sent in the request body

    try {
        // Generate a reset password token
        const resetToken = jwt.sign({ email }, process.env.RESET_TOKEN_SECRET as string, { expiresIn: '1h' });
        console.log(email)
        // Send reset password email
        await sendResetPasswordEmail(email, resetToken);

        res.status(200).json({ message: 'Reset password email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
}

export async function resetPassword(req: Request, res: Response): Promise<void> {
    const { token, newPassword } = req.body;
    try {
        // Verify the reset password token
        const decodedToken: any = jwt.verify(token, process.env.RESET_TOKEN_SECRET as string);

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password in the database
        await updateUserPasswordUC(decodedToken.email, hashedPassword);

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
}