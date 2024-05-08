"use strict";
// routes/city.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("../controllers/todo.controller");
const todo_validation_1 = require("../validations/todo.validation");
const validateResource_1 = __importDefault(require("../middleware/validateResource"));
const router = express_1.default.Router();
// Routes for todo model
router.get('/', todo_controller_1.getAllTodos);
router.post('/', (0, validateResource_1.default)(todo_validation_1.validateCreateTodo), todo_controller_1.createTodo);
router.get('/:id', (0, validateResource_1.default)(todo_validation_1.validateGetTodo), todo_controller_1.getTodoById);
router.put('/:id', (0, validateResource_1.default)(todo_validation_1.validateUpdateTodo), todo_controller_1.updateTodo);
router.delete('/:id', (0, validateResource_1.default)(todo_validation_1.validateDeleteTodo), todo_controller_1.deleteTodo);
exports.default = router;
