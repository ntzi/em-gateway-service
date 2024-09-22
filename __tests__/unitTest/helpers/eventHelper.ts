import { Artist } from '../../../src/api/models/artist.js';
import { Event } from '../../../src/api/models/event.js';

const createEvents = async (artists) => {
	const data = [
		{
			name: 'Event 1',
			date: new Date('2024-10-01'),
			location: 'Location 1',
			artists: [artists[0], artists[1]],
		},
		{
			name: 'Event 2',
			date: new Date('2024-10-02'),
			location: 'Location 2',
			artists: [artists[1]],
		},
	];

	const events: Event[] = [];
	data.map((event) => {
		const newEvent: Event = new Event();
		newEvent.name = event.name;
		newEvent.date = event.date;
		newEvent.location = event.location;
		newEvent.artists = event.artists;
		events.push(newEvent);
	});

	try {
		await Event.save(events);
	} catch (err) {
		console.error(err);
	}

	return events;
};

export { createEvents };
