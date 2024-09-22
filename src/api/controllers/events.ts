import { getEventArtists } from '../services/eventsService.js';
import {
	Fan,
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

	const artists = await getEventArtists(authorization, eventId);
	console.log('artists =', artists);

	const relevantFans: Fan[] = [
		{ id: 1, name: 'John Doe' },
		{ id: 2, name: 'Jane Doe' },
	];
	const resData = validateResData<GetRelevantFansResData>(
		{ relevantFans },
		getRelevantFansResData
	);
	return res.ok(resData);
};

export { getRelevantFans };
