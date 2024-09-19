import { NextFunction } from 'express';
import { RequestI, ResponseI } from '../types/responses/responsesTypes';

const requestLogger = (req: RequestI, res: ResponseI, next: NextFunction): void => {
	const start = Date.now();

	res.on('finish', () => {
		const {
			method,
			originalUrl,
		} = req;
		const { statusCode } = res;
		const duration = Date.now() - start;
		console.info(
			`${method} ${originalUrl} - ${statusCode} - ${duration}ms`,
		);
	});

	next();
};

export default requestLogger;
