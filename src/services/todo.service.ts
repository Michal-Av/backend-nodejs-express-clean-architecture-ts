// services/user.service.ts

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from '../data-access/todo.da';

export async function createTodoUC(body: any): Promise<any> {
  return await createTodo(body);
}

export async function deleteTodoUC(params: { id: string }): Promise<any> {
  const { id } = params;
  return await deleteTodo(id);
}

export async function updateTodoUC(params: { id: string }, body: any): Promise<any> {
  const { id } = params;
  return await updateTodo(id, body);
}

export async function getAllTodosUC(): Promise<any> {
  return await getAllTodos();
}

export async function getTodoUC(params: { id: string }): Promise<any> {
  const { id } = params;
  return await getTodo(id);
}
