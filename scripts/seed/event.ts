import bcrypt from 'bcryptjs';

import { Event } from '../../src/api/models/event.js';
import { ArtistSeeder } from './artist.js';
import { Artist } from '../../src/api/models/artist.js';

export class EventSeeder {
	constructor() {
		// Do nothing
	}

	private data = async () => {
		return [
			{
				name: 'Event 1',
				date: new Date('2024-10-01'),
				location: 'Location 1',
				artists: [{ id: 1 }, { id: 2 }] as Artist[],
			},
			{
				name: 'Event 2',
				date: new Date('2024-10-02'),
				location: 'Location 2',
				artists: [{ id: 2 }] as Artist[],
			},
		];
	};

	private records = async (): Promise<Event[]> => {
		const data = await this.data();
		const events: Event[] = data.map((event) => {
			const newEvent = new Event();
			newEvent.name = event.name;
			newEvent.date = event.date;
			newEvent.location = event.location;
			newEvent.artists = event.artists;
			return newEvent;
		});

		return events;
	};

	public seed = async () => {
		try {
			const records = await this.records();
			await Event.save(records);
		} catch (err) {
			console.error(err);
		}
	};
}
