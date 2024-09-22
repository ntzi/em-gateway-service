import passport from '../middleware/auth/passport.js';

export const authenticatorLoader = (app) => {
	// Initialize Passport middleware
	app.use(passport.initialize());
};
