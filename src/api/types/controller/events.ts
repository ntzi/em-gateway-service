import { RequestHandler } from 'express';

import { CustomParams, RequestI } from '../responses/responsesTypes';

/*
 	events.getRelevantFans()
*/
type GetRelevantFansParams = {
	eventId: number;
};
type GetRelevantFansQuery = Record<string, string>;
type GetRelevantFansBody = Record<string, string>;

export type Fan = {
	id: number;
	name: string;
};

export type GetRelevantFansReq = RequestI<
	CustomParams<GetRelevantFansParams>,
	GetRelevantFansQuery,
	GetRelevantFansBody
>;
export type GetRelevantFansHandler = RequestHandler<
	CustomParams<GetRelevantFansParams>,
	GetRelevantFansQuery,
	GetRelevantFansBody,
	qs.ParsedQs
>;
export interface GetRelevantFansResData {
	relevantFans: Fan[];
}
