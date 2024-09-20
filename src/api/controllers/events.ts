// import { User } from '../models/user.js';
import {
	Fan,
	GetRelevantFansHandler,
	GetRelevantFansReq,
	GetRelevantFansResData,
} from '../types/controller/events.js';
import { ErrorCause } from '../types/errors/errorTypes.js';
import { ResponseI } from '../types/responses/responsesTypes.js';
import { validateResData } from '../validators/responseDataValidator.js';
import {
	getRelevantFansResData,
} from '../validators/schemas/response/events.js';

const getRelevantFans: GetRelevantFansHandler = async (
	req: GetRelevantFansReq,
	res: ResponseI
) => {
	const { id } = req.params;

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
