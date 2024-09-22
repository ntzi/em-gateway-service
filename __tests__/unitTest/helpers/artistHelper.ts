import { Artist } from '../../../src/api/models/artist.js';

const createArtists = async () => {
	const data = [
		{
			name: 'Artist 1',
		},
		{
			name: 'Artist 2',
		},
	];

	const artists: Artist[] = [];
	data.map((artist) => {
		const newArtist: Artist = new Artist();
		newArtist.name = artist.name;
		artists.push(newArtist);
	});

	try {
		await Artist.save(artists);
	} catch (err) {
		console.error(err);
	}

	return artists;
};

export { createArtists };
