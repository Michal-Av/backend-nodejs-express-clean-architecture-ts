import { ParamsDictionary } from 'express-serve-static-core'; // Import ParamsDictionary
import { Request, Response, NextFunction } from 'express';
import { createTodoUC, deleteTodoUC, getAllTodosUC, getTodoUC, updateTodoUC } from '../services/todo.service';

// Define an interface that extends ParamsDictionary and adds the 'id' property
interface TodoParams extends ParamsDictionary {
    id: string;
}

export async function createTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        await createTodoUC(req.body);
        res.status(201).json({ message: 'Todo created successfully!' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export async function getTodoById(req: Request<TodoParams>, res: Response, next: NextFunction): Promise<void> {
    try {
        const todo = await getTodoUC(req.params);
        res.status(200).json(todo);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}

export async function updateTodo(req: Request<TodoParams>, res: Response, next: NextFunction): Promise<void> {
    try {
        await updateTodoUC(req.params, req.body);
        res.status(200).json({ message: 'Todo updated successfully!' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export async function deleteTodo(req: Request<TodoParams>, res: Response, next: NextFunction): Promise<void> {
    try {
        await deleteTodoUC(req.params);
        res.status(200).json({ message: 'todo deleted successfully!' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export async function getAllTodos(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const todos = await getAllTodosUC();
        res.status(200).json(todos);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
