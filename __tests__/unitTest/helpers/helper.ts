import { AppDataSource } from '../../../src/api/loaders/dbLoader.js';
import { Artist } from '../../../src/api/models/artist.js';
import { Event } from '../../../src/api/models/event.js';
import { Fan } from '../../../src/api/models/fan.js';
import { User } from '../../../src/api/models/user.js';

// The order of the tables is important because of the foreign keys
const allTables = [Fan, Event, Artist, User];

const deleteRecordsFromTables = async (tables = allTables) => {
	for (const table of tables) {
		await AppDataSource.getRepository(table).delete({});
	}
};

export { deleteRecordsFromTables };
