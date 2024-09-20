import { Router } from 'express';

import eventsRoutes from './events.js';

const rootRouter = Router();

rootRouter.use('/api', eventsRoutes);

export default rootRouter;
