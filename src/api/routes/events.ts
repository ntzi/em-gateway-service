import { Router } from 'express';

import { getRelevantFans } from '../controllers/events.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import { validate } from '../validators/requestValidator.js';
import { getRelevantSchema } from '../validators/schemas/request/events.js';

const router = Router();

router.get(
	'/v1/events/:eventId/relevant-fans',
	validate(getRelevantSchema),
	// isAuthenticated,
	asyncHandler(getRelevantFans)
);

export default router;
