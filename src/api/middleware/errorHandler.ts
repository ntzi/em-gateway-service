import { NextFunction } from 'express';

import { ErrorCause } from '../types/errors/errorTypes.js';
import { RequestI, ResponseI } from '../types/responses/responsesTypes.js';

const errorHandler = app => {
	app.use((err, _req: RequestI, res: ResponseI, _next: NextFunction) => {
		const { name, message, cause }: { name: string; message: string; cause: string } = err;

		if (name === 'UnauthorizedError') {
			console.error(err);
			res.unauthorized();
		} else if (name === 'InvalidTokenError') {
			console.error(err);
			res.forbidden();
		} else {
			console.error(err);
			res.serverError({}, message);
		}
	});
};

export default errorHandler;
