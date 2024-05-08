import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validate = (schema: Joi.ObjectSchema<any>) => (req: Request, res: Response, next: NextFunction): void => {
    try {
        const { body, query, params } = req;
        const input = { body, query, params };
        const { error } = schema.validate(input, { abortEarly: false });
        if (!error) {
            next(); // Call next middleware
        } else {
            const errorMessage = error.details.map(detail => detail.message).join(', ');
            console.error('Validation error:', errorMessage);
            res.status(400).json({ error: errorMessage }); // Return response if validation fails
        }
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Internal Server Error' }); // Return response for internal server error
    }
};

export default validate;
