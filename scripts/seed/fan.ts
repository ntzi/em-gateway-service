import bcrypt from 'bcryptjs';

import { Fan } from '../../src/api/models/fan.js';
import { Event } from '../../src/api/models/event.js';
import { Artist } from '../../src/api/models/artist.js';

export class FanSeeder {
	constructor() {
		// Do nothing
	}

	private data = async () => {
		return [
			{
				name: 'Fan 1',
				email: 'fan1@email.com',
				events: [{ id: 1 }, { id: 2 }] as Event[],
				artists: [{ id: 1 }, { id: 2 }] as Artist[],
			},
			{
				name: 'Fan 2',
				email: 'fan2@email.com',
				events: [{ id: 1 }, { id: 2 }] as Event[],
				artists: [{ id: 2 }] as Artist[],
			},
			{
				name: 'Fan 3',
				email: 'fan3@email.com',
				events: [{ id: 1 }] as Event[],
				artists: [{ id: 1 }] as Artist[],
			},
			{
				name: 'Fan 4',
				email: 'fan4@email.com',
				events: [{ id: 1 }] as Event[],
				artists: [{ id: 1 }] as Artist[],
			},
		];
	};

	private records = async (): Promise<Fan[]> => {
		const data = await this.data();
		const fans: Fan[] = data.map((fan) => {
			const newFan = new Fan();
			newFan.name = fan.name;
			newFan.email = fan.email;
			newFan.events = fan.events;
			newFan.artists = fan.artists;
			return newFan;
		});

		return fans;
	};

	public seed = async () => {
		try {
			const records = await this.records();
			await Fan.save(records);
		} catch (err) {
			console.error(err);
		}
	};
}
