import { Router } from 'express';

import {
	create,
	getAll,
	getInRange,
	getOne,
	getOneByCompanyId,
	remove,
	updateOne,
} from '../controllers/location.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { Roles, allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getAllSchema,
	getInRangeSchema,
	getOneByCompanyIdSchema,
	getOneSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/location.js';

const router = Router();

router.get(
	'/location/in-range',
	validate(getInRangeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getInRange),
);

router.get(
	'/location/:id',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/location/company/:id',
	validate(getOneByCompanyIdSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOneByCompanyId),
);

router.get(
	'/location/',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getAll),
);

router.post(
	'/location/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(create),
);

router.put(
	'/location/:id',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(updateOne),
);

router.delete(
	'/location/:id',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER, Roles.STAFF] }),
	asyncHandler(remove),
);

export default router;
