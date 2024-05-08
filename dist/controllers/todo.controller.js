"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = exports.deleteTodo = exports.updateTodo = exports.getTodoById = exports.createTodo = void 0;
const todo_service_1 = require("../services/todo.service");
async function createTodo(req, res, next) {
    try {
        await (0, todo_service_1.createTodoUC)(req.body);
        res.status(201).json({ message: 'Todo created successfully!' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.createTodo = createTodo;
async function getTodoById(req, res, next) {
    try {
        const todo = await (0, todo_service_1.getTodoUC)(req.params);
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}
exports.getTodoById = getTodoById;
async function updateTodo(req, res, next) {
    try {
        await (0, todo_service_1.updateTodoUC)(req.params, req.body);
        res.status(200).json({ message: 'Todo updated successfully!' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.updateTodo = updateTodo;
async function deleteTodo(req, res, next) {
    try {
        await (0, todo_service_1.deleteTodoUC)(req.params);
        res.status(200).json({ message: 'todo deleted successfully!' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.deleteTodo = deleteTodo;
async function getAllTodos(req, res, next) {
    try {
        const todos = await (0, todo_service_1.getAllTodosUC)();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.getAllTodos = getAllTodos;
