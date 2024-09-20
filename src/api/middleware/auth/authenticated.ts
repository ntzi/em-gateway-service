import { NextFunction } from 'express';
// import { auth } from 'express-oauth2-jwt-bearer';

import config from '../../../config/config.js';
import { RequestI, ResponseI } from '../../types/responses/responsesTypes.js';

const isAuthenticated = (req: RequestI, res: ResponseI, next: NextFunction) => {
	const {
		nodeEnv,
		auth0: { domain = '', api: { checkbird: { audience = '' } = {} } = {} } = {},
	} = config;

	const jwtOptions = {
		audience,
		issuerBaseURL: `https://${domain}/`,
	};

	return next();

	// auth(jwtOptions)(req, res, err => {
	// 	if (err) {
	// 		// If an error occurred during the JWT verification, return a 401 Unauthorized response
	// 		return res.unauthorized('', 'Invalid or missing authorization token');
	// 	}

	// 	// If the user is authenticated, call next() to proceed to the next middleware or route handler
	// 	return next();
	// });
};

export default isAuthenticated;
