"use strict";
// routes/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_routes_1 = __importDefault(require("./todo.routes"));
const user_routes_1 = require("./user.routes");
const router = express_1.default.Router();
router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));
router.use('/api/todo', todo_routes_1.default);
router.use("/auth", user_routes_1.userRoutes);
exports.default = router;
