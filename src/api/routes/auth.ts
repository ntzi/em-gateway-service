import { Router } from 'express';

import { asyncHandler } from '../middleware/asyncHandler.js';
import { validate } from '../validators/requestValidator.js';
import {
	loginSchema,
	registerSchema,
} from '../validators/schemas/request/auth.js';
import { login, register } from '../controllers/auth.js';

const router = Router();

router.post('/v1/register', validate(registerSchema), asyncHandler(register));
router.post('/v1/login', validate(loginSchema), asyncHandler(login));

export default router;
