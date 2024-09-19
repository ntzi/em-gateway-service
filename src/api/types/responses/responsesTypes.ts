import { Response } from 'express';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export type CustomParams<T> = T & ParamsDictionary;

interface ResponseJsonI {
	(data?: unknown, message?: string): object;
}
interface SendResponseI {
	(req: RequestI, res: Response): ResponseJsonI;
}

interface RequestI<Params = ParamsDictionary, Query = ParamsDictionary, Body = ParamsDictionary>
	extends Request<Params, any, Body, Query> {
	requestId?: string;
}
interface ResponseI extends Response {
	ok: ResponseJsonI;
	created: ResponseJsonI;
	badRequest: ResponseJsonI;
	forbidden: ResponseJsonI;
	notFound: ResponseJsonI;
	serverError: ResponseJsonI;
	unauthorized: ResponseJsonI;
}
interface ResponseType {
	message: string;
	data: unknown;
}

export { ResponseJsonI, SendResponseI, ResponseI, RequestI, ResponseType };
