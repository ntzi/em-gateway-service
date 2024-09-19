import { Router } from 'express';

import {
	create,
	getAll,
	getAppointments,
	getCompanies,
	getOne,
	getOneByAuth0Id,
	linkToCustomer,
	linkToEmployee,
	remove,
	updateOne,
} from '../controllers/user.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createSchema,
	getAllSchema,
	getAppointmentsSchema,
	getCompaniesSchema,
	getOneByAuth0IdSchema,
	getOneSchema,
	linkToCustomerSchema,
	linkToEmployeeSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/user.js';

const router = Router();

router.get(
	'/user/appointments/',
	validate(getAppointmentsSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getAppointments),
);
router.get(
	'/user/companies/',
	validate(getCompaniesSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getCompanies),
);
router.get(
	'/user/auth0/:id',
	validate(getOneByAuth0IdSchema),
	isAuthenticated,
	// isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOneByAuth0Id),
);
router.get(
	'/user/:id/',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);
router.get(
	'/user',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getAll),
);
router.post(
	'/user/',
	validate(createSchema),
	isAuthenticated,
	asyncHandler(create),
);
router.put(
	'/user/:id',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(updateOne),
);
router.delete(
	'/user/:id',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(remove),
);
router.put(
	'/user/:userId/link-to-employee/:employeeId',
	validate(linkToEmployeeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(linkToEmployee),
);
router.put(
	'/user/:userId/link-to-customer/:customerId',
	validate(linkToCustomerSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(linkToCustomer),
);

export default router;
