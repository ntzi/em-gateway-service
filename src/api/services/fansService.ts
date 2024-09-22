import { getter } from '../tools/axios.js';
import { endpoints } from './endpoints.js';
import { Service } from '../tools/axios.js';

export const getFansOfArtists = async (
	authorization: string | undefined,
	artistIds: number[]
) => {
	const allEndpoints = endpoints({ artistIds });
	const url = allEndpoints.fansService.fans.artists;
	const config = {
		headers: { Authorization: authorization },
		params: { artistIds },
	};

	const { data } = await getter(Service.FANS, url, config);

	return data;
};
