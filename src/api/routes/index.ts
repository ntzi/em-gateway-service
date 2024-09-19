import { Router } from 'express';

import appointmentRoutes from '../routes/appointment.js';
import availabilityRoutes from './companyAvailability.js';
import companyRoutes from '../routes/company.js';
import customerRoutes from '../routes/customer.js';
import employeeRoutes from '../routes/employee.js';
import employeeAvailability from '../routes/employeeAvailability.js';
import locationRoutes from '../routes/location.js';
import serviceRoutes from '../routes/service.js';
import userRoutes from '../routes/user.js';
import reCaptcha from '../routes/reCaptcha.js';
import gBucket from '../routes/gBucket.js';
import notification from '../routes/notification.js';
import { router as admin } from '../routes/admin.js';

const rootRouter = Router();

rootRouter.use('/api', appointmentRoutes);
rootRouter.use('/api', availabilityRoutes);
rootRouter.use('/api', companyRoutes);
rootRouter.use('/api', locationRoutes);
rootRouter.use('/api', serviceRoutes);
rootRouter.use('/api', userRoutes);
rootRouter.use('/api', customerRoutes);
rootRouter.use('/api', employeeRoutes);
rootRouter.use('/api', employeeAvailability);
rootRouter.use('/api', reCaptcha);
rootRouter.use('/api', gBucket);
rootRouter.use('/api', notification);
rootRouter.use('', admin);

export default rootRouter;
