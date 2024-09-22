type PathVariables = {
	id?: string | number | null;
	artistIds?: number[];
};
export const endpoints = (pathVariables: PathVariables) => {
	const { id, artistIds } = pathVariables;

	return {
		eventsService: {
			events: {
				artists: `api/v1/events/${id}/artists`,
			},
		},
		fansService: {
			fans: {
				artists: `api/v1/fans/relevant-artists/${artistIds}`,
			},
		},
	};
};
