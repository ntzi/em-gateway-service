import Joi from 'joi';

import { RequestSchema } from '../../../types/validators/validator';

const getRelevantSchema = (): RequestSchema => {
	return Joi.object({
		params: {
			eventId: Joi.number().required(),
		},
		query: {},
		body: {},
	});
};

export { getRelevantSchema };
