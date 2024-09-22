import { RequestHandler } from 'express';

import { CustomParams, RequestI } from '../responses/responsesTypes';

/*
 	auth.register()
*/
type RegisterParams = Record<string, string>;
type RegisterQuery = Record<string, string>;
type RegisterBody = { email: string; password: string };

export type RegisterReq = RequestI<
	CustomParams<RegisterParams>,
	RegisterQuery,
	RegisterBody
>;
export type RegisterHandler = RequestHandler<
	CustomParams<RegisterParams>,
	RegisterQuery,
	RegisterBody,
	qs.ParsedQs
>;
export interface RegisterResData {}

/*
 	auth.login()
*/
type LoginParams = Record<string, string>;
type LoginQuery = Record<string, string>;
type LoginBody = { email: string; password: string };

export type LoginReq = RequestI<
	CustomParams<LoginParams>,
	LoginQuery,
	LoginBody
>;
export type LoginHandler = RequestHandler<
	CustomParams<LoginParams>,
	LoginQuery,
	LoginBody,
	qs.ParsedQs
>;
export interface LoginResData {
	token: string;
}
