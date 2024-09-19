import { EmployeeAvailability } from '../../src/api/models/employeeAvailability.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

export class EmployeeAvailabilitySeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			// Same hours as company
			{
				employeeId: 1,
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
			},
			// Same hours as company except Tuesday
			{
				employeeId: 2,
				workHours: {
					Monday: {
						open: '09:00',
						close: '18:00',
						breakStart: '13:00',
						breakStop: '14:00',
					},
					Tuesday: {
						open: '12:00',
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
			},
			// Same hours as company
			{
				employeeId: 3,
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
			},
			// Same hours as company
			{
				employeeId: 4,
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
			},
		];
	};

	private records = (): EmployeeAvailability[] => {
		const availabilities: EmployeeAvailability[] = this.data().map(availability => {
			const newAvailability = new EmployeeAvailability();
			assignIfDefined(newAvailability, availability);
			return newAvailability;
		});

		return availabilities;
	};

	public seed = async () => {
		try {
			await EmployeeAvailability.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
