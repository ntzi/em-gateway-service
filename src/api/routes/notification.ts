import { Router } from 'express';

import { create, getOne, getOneByCompanyId, updateOne } from '../controllers/notification.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { Roles, allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getOneByCompanyIdSchema,
	getOneSchema,
	updateOneSchema,
} from '../validators/schemas/request/notification.js';

const router = Router();

router.get(
	'/notification/:id',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/notification/:companyId',
	validate(getOneByCompanyIdSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOneByCompanyId),
);

router.post(
	'/notification/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER] }),
	asyncHandler(create),
);

router.put(
	'/notification/:id',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(updateOne),
);

export default router;
