import { CompanyAvailability } from '../../src/api/models/companyAvailability.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

export class CompanyAvailabilitySeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				companyId: 1,
				workHours: {
					Monday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Tuesday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Wednesday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Thursday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Friday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Saturday: {
						open: '09:00',
						close: '16:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
				},
				timezone: 'Europe/Athens',
			},
			{
				companyId: 2,
				workHours: {
					Monday: {
						open: '08:00',
						close: '20:00',
						breakStart: '13:00',
						breakStop: '15:30',
					},
					Tuesday: {
						open: '08:00',
						close: '20:00',
						breakStart: '13:00',
						breakStop: '15:30',
					},
					Wednesday: {
						open: '08:00',
						close: '20:00',
						breakStart: '13:00',
						breakStop: '15:30',
					},
					Thursday: {
						open: '08:00',
						close: '20:00',
						breakStart: '13:00',
						breakStop: '15:30',
					},
					Friday: {
						open: '08:00',
						close: '20:00',
						breakStart: '13:00',
						breakStop: '15:30',
					},
					Saturday: {
						open: '08:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '15:00',
					},
				},
				timezone: 'Europe/Athens',
			},
		];
	};

	private records = (): CompanyAvailability[] => {
		const availabilities: CompanyAvailability[] = this.data().map(availability => {
			const newAvailability = new CompanyAvailability();
			assignIfDefined(newAvailability, availability);
			return newAvailability;
		});

		return availabilities;
	};

	public seed = async () => {
		try {
			await CompanyAvailability.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
