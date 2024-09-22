import { NextFunction } from 'express';

import { RequestI, ResponseI } from '../../types/responses/responsesTypes.js';
import passport from 'passport';
import config from '../../../config/config.js';

const { nodeEnv } = config;

const isAuthenticated = (req: RequestI, res: ResponseI, next: NextFunction) => {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		// Skip authentication for tests
		if (nodeEnv === 'test' || nodeEnv === 'testLocal') return next();

		if (err || !user) {
			return res.unauthorized();
		}

		return next();
	})(req, res, next);
};

export default isAuthenticated;
