"use strict";
// todo.validator.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetTodo = exports.validateDeleteTodo = exports.validateUpdateTodo = exports.validateCreateTodo = void 0;
const Joi = require('joi');
exports.validateCreateTodo = Joi.object({
    body: Joi.object({
        title: Joi.string().required().error(new Error('Title is required')),
        description: Joi.string().allow('').optional(),
        flag: Joi.string()
            .valid('Red', 'Orange', 'Green')
            .optional()
            .error(new Error('Flag must be one of Red, Orange, or Green')),
    }),
    params: Joi.object(),
    query: Joi.object(),
});
exports.validateUpdateTodo = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object({
        title: Joi.string().optional(),
        description: Joi.string().allow('').optional(),
        status: Joi.string().valid('Open', 'In Progress', 'Done').optional(),
        flag: Joi.string().valid('Red', 'Orange', 'Green').optional(),
    }).min(1),
    query: Joi.object(),
});
exports.validateDeleteTodo = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object(),
    query: Joi.object(),
});
exports.validateGetTodo = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object(),
    query: Joi.object(),
});
