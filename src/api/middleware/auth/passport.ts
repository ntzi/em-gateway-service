import {
	Strategy as JwtStrategy,
	ExtractJwt,
	StrategyOptions,
} from 'passport-jwt';
import passport from 'passport';
import { User } from '../../models/user.js';
import config from '../../../config/config.js';

const {
	auth: { secretKey },
} = config;

const options: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secretKey,
};

passport.use(
	new JwtStrategy(options, async (payload, done) => {
		try {
			const user = await User.findOne({ where: { id: payload.userId } });

			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		} catch (error) {
			return done(error, false);
		}
	})
);

export default passport;
