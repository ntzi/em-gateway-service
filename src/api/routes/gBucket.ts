import { Router } from 'express';

import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import { getSignedUrl } from '../controllers/gBucket.js';
import { getSignedUrlSchema } from '../validators/schemas/request/gBucket.js';

const router = Router();

router.get(
	'/bucket/signed-url',
	validate(getSignedUrlSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getSignedUrl),
);

export default router;
