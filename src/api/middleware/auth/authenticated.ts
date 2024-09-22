import { NextFunction } from 'express';

import { RequestI, ResponseI } from '../../types/responses/responsesTypes.js';
import passport from 'passport';

const isAuthenticated = (req: RequestI, res: ResponseI, next: NextFunction) => {
	passport.authenticate('jwt', { session: false }, (err, user) => {
		if (err || !user) {
			return res.unauthorized();
		}

		return next();
	})(req, res, next);
};

export default isAuthenticated;
