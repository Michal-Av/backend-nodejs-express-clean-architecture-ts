"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/index.ts
const express_1 = __importDefault(require("express"));
const csurf_1 = __importDefault(require("csurf"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const user_routes_1 = require("./user.routes");
const router = express_1.default.Router();
const csrfProtection = (0, csurf_1.default)({ cookie: true });
router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));
// Handle GET request to retrieve CSRF token
router.get('/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});
// Error handling for CSRF token errors
router.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({ message: 'Invalid CSRF token' });
    }
    else {
        next(err);
    }
});
router.use('/api/todo', todo_routes_1.default);
router.use("/auth", csrfProtection, user_routes_1.userRoutes);
exports.default = router;
