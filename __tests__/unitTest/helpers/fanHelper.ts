import { Fan } from '../../../src/api/models/fan.js';

const createFans = async (events, artists) => {
	const data = [
		{
			name: 'Fan 1',
			email: 'fan1@email.com',
			events: [events[0], events[1]],
			artists: [artists[0], artists[1]],
		},
		{
			name: 'Fan 2',
			email: 'fan2@email.com',
			events: [events[0], events[1]],
			artists: [artists[1]],
		},
		{
			name: 'Fan 3',
			email: 'fan3@email.com',
			events: [events[0]],
			artists: [artists[0]],
		},
		{
			name: 'Fan 4',
			email: 'fan4@email.com',
			events: [events[0]],
			artists: [artists[0]],
		},
	];

	const fans: Fan[] = [];
	data.map((fan) => {
		const newFan: Fan = new Fan();
		newFan.name = fan.name;
		newFan.email = fan.email;
		newFan.events = fan.events;
		newFan.artists = fan.artists;
		fans.push(newFan);
	});

	try {
		await Fan.save(fans);
	} catch (err) {
		console.error(err);
	}

	return fans;
};

export { createFans };
