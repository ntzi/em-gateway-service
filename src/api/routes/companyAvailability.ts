import { Router } from 'express';

import { create, getAll, getOne, remove, updateOne } from '../controllers/companyAvailability.js';
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
} from '../validators/schemas/request/companyAvailability.js';

const router = Router();

router.get(
	'/company/:companyId/availability/:availabilityId',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/company/:companyId/availability/',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getAll),
);

router.post(
	'/company/:companyId/availability/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(create),
);

router.put(
	'/company/:companyId/availability/:availabilityId',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(updateOne),
);

router.delete(
	'/company/:companyId/availability/:availabilityId',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(remove),
);

export default router;
