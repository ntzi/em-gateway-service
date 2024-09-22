import Joi from 'joi';

import { RequestSchema } from '../../../types/validators/validator';

const registerSchema = (): RequestSchema => {
	return Joi.object({
		params: {},
		query: {},
		body: {
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		},
	});
};

const loginSchema = (): RequestSchema => {
	return Joi.object({
		params: {},
		query: {},
		body: {
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		},
	});
};

export { registerSchema, loginSchema };
