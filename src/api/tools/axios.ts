import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config/config.js';

const {
	services: {
		events: { url: EVENTS_SERVICE_API },
		fans: { url: FANS_SERVICE_API },
	},
} = config;

const axiosEventsService = axios.create({ baseURL: EVENTS_SERVICE_API });
const axiosFansService = axios.create({ baseURL: FANS_SERVICE_API });

export enum Service {
	EVENTS = 'EVENTS',
	FANS = 'FANS',
}

const getAxiosInstance = (service: Service) => {
	switch (service) {
		case 'EVENTS':
			return axiosEventsService;
		case 'FANS':
			return axiosFansService;
		default:
			return axiosEventsService;
	}
};

export const getter = async (
	service: Service,
	url: string,
	config?: AxiosRequestConfig
): Promise<any | { message: string; data: any }> => {
	try {
		const axiosInstance = getAxiosInstance(service);
		const response = await axiosInstance.get(url, config);

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const poster = async (
	service: Service,
	url: string,
	data: any,
	config?: AxiosRequestConfig
): Promise<any | { message: string; data: any }> => {
	try {
		const axiosInstance = getAxiosInstance(service);
		const response = await axiosInstance.post(url, data, config);

		return response.data;
	} catch (error) {
		throw error;
	}
};
