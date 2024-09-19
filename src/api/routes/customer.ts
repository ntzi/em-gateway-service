import { Router } from 'express';

import {
	create,
	createOrUpdate,
	getAll,
	getOne,
	remove,
	updateOne,
} from '../controllers/customer.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { Roles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getAllSchema,
	getOneSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/customer.js';

const router = Router();

router.get(
	'/company/:companyId/customer/:customerId',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(getOne),
);
router.get(
	'/company/:companyId/customer/',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(getAll),
);
router.post(
	'/company/:companyId/customer/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(create),
);
router.post(
	'/public/company/:companyId/customer/',
	validate(createSchema),
	asyncHandler(createOrUpdate),
);
router.put(
	'/company/:companyId/customer/:customerId',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(updateOne),
);
router.delete(
	'/company/:companyId/customer/:customerId',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(remove),
);

export default router;
