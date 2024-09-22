type PathVariables = {
	id?: string | number | null;
	eventId?: string | number | null;
};
export const endpoints = (pathVariables: PathVariables) => {
	const { id } = pathVariables;

	return {
		eventsService: {
			events: {
				artists: `api/v1/events/${id}/artists`,
			},
		},
		fansService: {
			fans: {
				artists: `api/v1/fans/artist/${id}`,
			},
		},
	};
};
