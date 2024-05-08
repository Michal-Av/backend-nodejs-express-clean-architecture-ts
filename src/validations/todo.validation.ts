// todo.validator.js

const Joi = require('joi');

export const validateCreateTodo = Joi.object({
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

export const validateUpdateTodo = Joi.object({
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

export const validateDeleteTodo = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error('ID is required')),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

export const validateGetTodo = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error('ID is required')),
  }),
  body: Joi.object(),
  query: Joi.object(),
});
