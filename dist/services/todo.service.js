"use strict";
// services/user.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoUC = exports.getAllTodosUC = exports.updateTodoUC = exports.deleteTodoUC = exports.createTodoUC = void 0;
const todo_da_1 = require("../data-access/todo.da");
async function createTodoUC(body) {
    return await (0, todo_da_1.createTodo)(body);
}
exports.createTodoUC = createTodoUC;
async function deleteTodoUC(params) {
    const { id } = params;
    return await (0, todo_da_1.deleteTodo)(id);
}
exports.deleteTodoUC = deleteTodoUC;
async function updateTodoUC(params, body) {
    const { id } = params;
    return await (0, todo_da_1.updateTodo)(id, body);
}
exports.updateTodoUC = updateTodoUC;
async function getAllTodosUC() {
    return await (0, todo_da_1.getAllTodos)();
}
exports.getAllTodosUC = getAllTodosUC;
async function getTodoUC(params) {
    const { id } = params;
    return await (0, todo_da_1.getTodo)(id);
}
exports.getTodoUC = getTodoUC;
