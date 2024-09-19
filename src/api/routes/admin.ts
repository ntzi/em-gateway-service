import { Router } from 'express';
import { ExpressAdapter } from '@bull-board/express';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const router = Router();

router.use(
	'/admin/queues',
	// isAuthenticated,
	// isAuthorized({ hasRole: allRoles }),
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	serverAdapter.getRouter(),
);

export { router, serverAdapter };
