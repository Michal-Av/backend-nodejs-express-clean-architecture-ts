// data-access/todo.da.ts

import TodoModel, { TodoDocument } from '../models/todo.model';

export async function getAllTodos(): Promise<TodoDocument[]> {
    return await TodoModel.find();
}

export async function getTodo(id: string): Promise<TodoDocument | null> {
    return await TodoModel.findById(id);
}

export async function createTodo(input: any): Promise<TodoDocument> {
    return await TodoModel.create(input);
}

export async function deleteTodo(id: string): Promise<TodoDocument | null> {
    return await TodoModel.findByIdAndDelete(id);
}

export async function updateTodo(id: string, input: any): Promise<TodoDocument | null> {
    return await TodoModel.findByIdAndUpdate(id, input, { new: true });
}
