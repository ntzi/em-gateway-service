/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the service
 *         name:
 *           type: string
 *           description: The name of the service
 *         category:
 *           type: string
 *           description: The category of the service
 *         isActive:
 *           type: boolean
 *           description: Whether the service is active or not
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the service was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the service was updated
 *       example:
 *         id: 1
 *         name: Men's Haircut
 *         category: Haircut
 *         isActive: true
 *         createdAt: 2023-01-26 12:47:24.992997
 *         udpatedAt: 2023-01-26 12:47:24.992997
 */
import { Router } from 'express';

import { create, getAll, getOne, remove, updateOne } from '../controllers/service.js';
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
} from '../validators/schemas/request/service.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Manage services
 * /services/:id:
 *   get:
 *     summary: Lists one service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     responses:
 *       200:
 *         description: The found service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       500:
 *         description: Some server error
 */
router.get(
	'/company/:companyId/service/:serviceId',
	validate(getOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: allRoles }),
	asyncHandler(getOne),
);

/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Manage services
 * /services:
 *   get:
 *     summary: Lists all the services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: The found services.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       500:
 *         description: Some server error
 */
router.get('/company/:companyId/service/', validate(getAllSchema), asyncHandler(getAll));

/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Manage services
 * /services:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The created service.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       500:
 *         description: Some server error
 */

router.post(
	'/company/:companyId/service/',
	validate(createSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(create),
);

router.put(
	'/company/:companyId/service/:serviceId',
	validate(updateOneSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(updateOne),
);

router.delete(
	'/company/:companyId/service/:serviceId',
	validate(removeSchema),
	isAuthenticated,
	isAuthorized({ hasRole: [Roles.ADMIN, Roles.OWNER, Roles.MANAGER] }),
	asyncHandler(remove),
);

export default router;
