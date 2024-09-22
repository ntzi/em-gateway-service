import { getter } from '../tools/axios.js';
import { endpoints } from './endpoints.js';
import { Service } from '../tools/axios.js';

export const getEventArtists = async (
	authorization: string | undefined,
	eventId: number
) => {
	const allEndpoints = endpoints({ id: eventId });
	const url = allEndpoints.eventsService.events.artists;
	const config = {
		headers: { Authorization: authorization },
		params: { eventId },
	};

	const { data } = await getter(Service.EVENTS, url, config);

	return data;
};
