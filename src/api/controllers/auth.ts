import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models/user.js';
import { ResponseI } from '../types/responses/responsesTypes.js';
import { validateResData } from '../validators/responseDataValidator.js';
import {
	LoginHandler,
	LoginReq,
	LoginResData,
	RegisterHandler,
	RegisterReq,
	RegisterResData,
} from '../types/controller/auth.js';
import {
	loginResData,
	registerResData,
} from '../validators/schemas/response/auth.js';
import config from '../../config/config.js';

const {
	auth: { secretKey, expirationTime },
} = config;

const register: RegisterHandler = async (req: RegisterReq, res: ResponseI) => {
	const { email, password } = req.body;

	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = new User();
	newUser.email = email;
	newUser.password = hashedPassword;

	await newUser.save();

	const resData = validateResData<RegisterResData>({}, registerResData);

	return res.ok(resData, 'Registered successfully');
};

const login: LoginHandler = async (req: LoginReq, res: ResponseI) => {
	const { email, password } = req.body;

	const user = await User.findOne({ where: { email } });

	if (!user) {
		return res.status(400).json({ message: 'Invalid email or password' });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return res.status(400).json({ message: 'Invalid email or password' });
	}

	// Create a JWT token
	const token = jwt.sign({ userId: user.id }, secretKey, {
		expiresIn: expirationTime,
	});

	const resData = validateResData<LoginResData>({ token }, loginResData);

	return res.ok(resData);
};

export { register, login };
