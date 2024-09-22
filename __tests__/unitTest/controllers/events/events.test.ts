import test from 'ava';
import supertest from 'supertest';

import app from '../../../../src/api/loaders/appLoader.js';
import {
	postgresClose,
	postgresLoad,
} from '../../../../src/api/loaders/dbLoader.js';
import { deleteRecordsFromTables } from '../../helpers/helper.js';
import { createUsers } from '../../helpers/userHelper.js';
import { createArtists } from '../../helpers/artistHelper.js';
import { createEvents } from '../../helpers/eventHelper.js';
import { createFans } from '../../helpers/fanHelper.js';

let apiRequest;
let artists;
let events;

test.before(async () => {
	await postgresLoad();
	apiRequest = supertest(app);

	await createUsers();
	artists = await createArtists();
	events = await createEvents(artists);
	await createFans(events, artists);
});

test.after(async () => {
	await deleteRecordsFromTables();
	await postgresClose();
});

test('first event should have 4 fans', async (t) => {
	const eventId = events[0].id;
	const endpoint = `/api/v1/events/${eventId}/relevant-fans`;
	const response = await apiRequest.get(endpoint);

	t.is(response.status, 200);
	t.is(response.body.data.length, 4);
});

test('second event should have 2 fans', async (t) => {
	const eventId = events[1].id;
	const endpoint = `/api/v1/events/${eventId}/relevant-fans`;
	const response = await apiRequest.get(endpoint);

	t.is(response.status, 200);
	t.is(response.body.data.length, 2);
});
