// routes/city.routes.ts

import express, { Router } from 'express';
import { Request, Response } from 'express';
import { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } from '../controllers/todo.controller';
import { validateCreateTodo, validateUpdateTodo, validateDeleteTodo, validateGetTodo } from '../validations/todo.validation';
import validateResource from '../middleware/validateResource';

const router: Router = express.Router();

// Routes for todo model
router.get('/', getAllTodos);

router.post('/', validateResource(validateCreateTodo), createTodo);

router.get('/:id', validateResource(validateGetTodo), getTodoById);

router.put('/:id', validateResource(validateUpdateTodo), updateTodo);

router.delete('/:id', validateResource(validateDeleteTodo), deleteTodo);

export default router;
