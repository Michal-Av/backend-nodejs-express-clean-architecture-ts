// routes/index.ts

import express from 'express';
import todoRoutes from './todo.routes';
import {userRoutes} from './user.routes';

const router = express.Router();

router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));

router.use('/api/todo', todoRoutes);
router.use("/auth", userRoutes);

export default router;
