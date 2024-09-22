import { Artist } from '../models/artist.js';
import { Event } from '../models/event.js';
import { Fan } from '../models/fan.js';
import { getEventArtists } from '../services/eventsService.js';
import { getFansOfArtists } from '../services/fansService.js';
import {
	// Fan,
	GetRelevantFansHandler,
	GetRelevantFansReq,
	GetRelevantFansResData,
} from '../types/controller/events.js';
import { ResponseI } from '../types/responses/responsesTypes.js';
import { validateResData } from '../validators/responseDataValidator.js';
import { getRelevantFansResData } from '../validators/schemas/response/events.js';

const getRelevantFans: GetRelevantFansHandler = async (
	req: GetRelevantFansReq,
	res: ResponseI
) => {
	const {
		headers: { authorization },
		params: { eventId },
	} = req;

	// Get artists of event from events-service
	const artistIds = await getEventArtists(authorization, eventId);

	// Get fans of artists from fans-service
	const relevantFans = await getFansOfArtists(authorization, artistIds);

	const resData = validateResData<GetRelevantFansResData>(
		relevantFans,
		getRelevantFansResData
	);

	return res.ok(resData);
};

export { getRelevantFans };
