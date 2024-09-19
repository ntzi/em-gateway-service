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

const router = Router();

router.get(
	'/company/:id',
	validate(getOneSchema),
	asyncHandler(getOne),
);

router.get(
	'/company/',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN] }),
	asyncHandler(getAll),
);

router.post(
	'/company/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.USER] }),
	asyncHandler(create),
);

router.put(
	'/company/:id',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(updateOne),
);

router.delete(
	'/company/:id',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER] }),
	asyncHandler(remove),
);

export default router;
