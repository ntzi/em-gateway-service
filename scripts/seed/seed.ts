import { postgresClose, postgresLoad } from '../../src/api/loaders/dbLoader.js';
import { UserSeeder } from './user.js';

const userSeeder = new UserSeeder();

await postgresLoad();

// Seed all tables
await userSeeder.seed();

await postgresClose();
