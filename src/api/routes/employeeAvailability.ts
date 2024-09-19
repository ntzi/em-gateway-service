import { Router } from 'express';

import { create, getOne, getTimeSlots, remove, updateOne } from '../controllers/employeeAvailability.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getOneSchema,
	getTimeSlotsSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/employeeAvailability.js';

const router = Router();

router.get(
	'/company/:companyId/employee/:employeeId/availability/:availabilityId',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/company/:companyId/employee/:employeeId/availability/',
	validate(getTimeSlotsSchema),
	asyncHandler(getTimeSlots),
);

router.post(
	'/company/:companyId/employee/:employeeId/availability/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(create),
);

router.put(
	'/company/:companyId/employee/:employeeId/availability/:availabilityId',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(updateOne),
);

router.delete(
	'/company/:companyId/employee/:employeeId/availability/:availabilityId',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(remove),
);

export default router;
