import bcrypt from 'bcryptjs';

import { Artist } from '../../src/api/models/artist.js';

export class ArtistSeeder {
	constructor() {
		// Do nothing
	}

	private data = async () => {
		return [
			{
				name: 'Artist 1',
			},
			{
				name: 'Artist 2',
			},
		];
	};

	public records = async (): Promise<Artist[]> => {
		const data = await this.data();
		const artists: Artist[] = data.map((artist) => {
			const newArtist = new Artist();
			newArtist.name = artist.name;
			return newArtist;
		});

		return artists;
	};

	public seed = async () => {
		try {
			const records = await this.records();
			await Artist.save(records);
		} catch (err) {
			console.error(err);
		}
	};
}
