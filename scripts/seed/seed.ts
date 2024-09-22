import { postgresClose, postgresLoad } from '../../src/api/loaders/dbLoader.js';
import { ArtistSeeder } from './artist.js';
import { EventSeeder } from './event.js';
import { FanSeeder } from './fan.js';
import { UserSeeder } from './user.js';

const userSeeder = new UserSeeder();
const artistSeeder = new ArtistSeeder();
const eventSeeder = new EventSeeder();
const fanSeeder = new FanSeeder();

await postgresLoad();

// Seed all tables
await userSeeder.seed();
await artistSeeder.seed();
await eventSeeder.seed();
await fanSeeder.seed();

await postgresClose();
