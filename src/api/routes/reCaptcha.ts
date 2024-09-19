import { Router } from 'express';

import { create, getAll, getOne, remove, updateOne } from '../controllers/company.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { Roles, allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getAllSchema,
	getOneSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/company.js';
import reCaptcha from '../middleware/auth/reCaptcha.js';
import { verify } from '../controllers/reCapcha.js';

const router = Router();

router.get(
	'/recaptcha/verify',
	reCaptcha,
	asyncHandler(verify),
);

export default router;
