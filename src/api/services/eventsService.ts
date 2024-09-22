import { getter } from '../tools/axios.js';
import { endpoints } from './endpoints.js';
import { Service } from '../tools/axios.js';

export const getEventArtists = async (eventId: number) => {
	const allEndpoints = endpoints({ id: eventId });
	const url = allEndpoints.eventsService.events.artists;
	const config = {
		params: { eventId },
	};

	const { data } = await getter(Service.EVENTS, url, config);

	return data;
};
