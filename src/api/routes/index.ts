import { Router } from 'express';

import eventsRoutes from './events.js';
import authRoutes from './auth.js';

const rootRouter = Router();

rootRouter.use('/api', eventsRoutes);
rootRouter.use('/api', authRoutes);

export default rootRouter;
