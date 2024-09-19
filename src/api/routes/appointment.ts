import { Router } from 'express';

import {
	create,
	createPublic,
	getAll,
	getOne,
	remove,
	removePublic,
	updateOne,
} from '../controllers/appointment.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';
import isAuthorized from '../middleware/auth/authorized.js';
import { allRoles } from '../types/auth/authorized.js';
import { validate } from '../validators/requestValidator.js';
import {
	createPublicSchema,
	createSchema,
	getAllSchema,
	getOneSchema,
	removePublicSchema,
	removeSchema,
	updateOneSchema,
} from '../validators/schemas/request/appointment.js';
import reCaptcha from '../middleware/auth/reCaptcha.js';

const router = Router();

router.get(
	'/appointment/:id',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

router.get(
	'/appointment/',
	validate(getAllSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getAll),
);

router.post(
	'/appointment/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(create),
);

router.post(
	'/public/appointment/',
	validate(createPublicSchema),
	reCaptcha,
	asyncHandler(createPublic),
);

router.put(
	'/appointment/:id',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(updateOne),
);

router.delete(
	'/appointment/:id',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(remove),
);

router.delete(
	'/public/appointment/:publicId',
	validate(removePublicSchema),
	asyncHandler(removePublic),
);

export default router;
