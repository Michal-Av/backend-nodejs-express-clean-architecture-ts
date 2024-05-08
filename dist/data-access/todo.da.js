"use strict";
// data-access/todo.da.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.createTodo = exports.getTodo = exports.getAllTodos = void 0;
const todo_model_1 = __importDefault(require("../models/todo.model"));
async function getAllTodos() {
    return await todo_model_1.default.find();
}
exports.getAllTodos = getAllTodos;
async function getTodo(id) {
    return await todo_model_1.default.findById(id);
}
exports.getTodo = getTodo;
async function createTodo(input) {
    return await todo_model_1.default.create(input);
}
exports.createTodo = createTodo;
async function deleteTodo(id) {
    return await todo_model_1.default.findByIdAndDelete(id);
}
exports.deleteTodo = deleteTodo;
async function updateTodo(id, input) {
    return await todo_model_1.default.findByIdAndUpdate(id, input, { new: true });
}
exports.updateTodo = updateTodo;
