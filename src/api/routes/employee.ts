import { Router } from 'express';

import { create, getAll, getOne, remove, updateOne } from '../controllers/employee.js';
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
} from '../validators/schemas/request/employee.js';

const router = Router();

router.get(
	'/company/:companyId/employee/:employeeId',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/company/:companyId/employee/',
	validate(getAllSchema),
	asyncHandler(getAll),
);

router.post(
	'/company/:companyId/employee/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(create),
);

router.put(
	'/company/:companyId/employee/:employeeId',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(updateOne),
);

router.delete(
	'/company/:companyId/employee/:employeeId',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(remove),
);

export default router;
