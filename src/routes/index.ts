// routes/index.ts
import express, { Request, Response, NextFunction } from 'express';
import csrf from 'csurf';
import todoRoutes from './todo.routes';
import {userRoutes} from './user.routes';

const router = express.Router();
const csrfProtection = csrf({ cookie: true });

router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));

// Handle GET request to retrieve CSRF token
router.get('/csrf-token', csrfProtection, (req: Request, res: Response) => {
    res.json({ csrfToken: req.csrfToken() });
});

// Error handling for CSRF token errors
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({ message: 'Invalid CSRF token' });
    } else {
        next(err);
    }
});

router.use('/api/todo', todoRoutes);
router.use("/auth", csrfProtection, userRoutes);

export default router;
