import { postgresClose, postgresLoad } from '../../src/api/loaders/dbLoader.js';
import { CompanyAvailabilitySeeder } from './companyAvailability.js';
import { CompanySeeder } from './company.js';
import { CustomerSeeder } from './customer.js';
import { EmployeeSeeder } from './employee.js';
import { EmployeeAvailabilitySeeder } from './employeeAvailability.js';
import { LocationSeeder } from './location.js';
import { PersonSeeder } from './person.js';
import { ServiceSeeder } from './service.js';
import { UserSeeder } from './user.js';
import { AppointmentSeeder } from './appointment.js';
import { NotificationSeeder } from './notification.js';

const userSeeder = new UserSeeder();
const companySeeder = new CompanySeeder();
const serviceSeeder = new ServiceSeeder();
const companyAvailabilitySeeder = new CompanyAvailabilitySeeder();
const locationSeeder = new LocationSeeder();
const personSeeder = new PersonSeeder();
const employeeSeeder = new EmployeeSeeder();
const employeeAvailabilitySeeder = new EmployeeAvailabilitySeeder();
const customerSeeder = new CustomerSeeder();
const appointmentSeeder = new AppointmentSeeder();
const notificationSeeder = new NotificationSeeder();

await postgresLoad();

// Seed all tables
await personSeeder.seed();
await userSeeder.seed();
await locationSeeder.seed();
await companySeeder.seed();
await employeeSeeder.seed();
await employeeAvailabilitySeeder.seed();
await customerSeeder.seed();
await serviceSeeder.seed();
await companyAvailabilitySeeder.seed();
await appointmentSeeder.seed();
await notificationSeeder.seed();

await postgresClose();
