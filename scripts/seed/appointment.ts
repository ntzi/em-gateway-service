import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { Appointment } from '../../src/api/models/appointment.js';
import { Status } from '../../src/api/types/controller/appointment.js';
import { Service } from '../../src/api/models/service.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

type OccurrenceType = 'next' | 'last';
type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export class AppointmentSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				start: this.getDate('next', 'Tuesday', '10:00'),
				status: Status.BOOKED,
				customerNotes: 'Can I pay with card?',
				companyNotes: 'Usually arrives late.',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 1,
				employeeId: 1,
				customerId: 1,
			},
			// Different time, different service, same employee, same customer
			{
				start: this.getDate('next', 'Tuesday', '11:00'),
				status: Status.BOOKED,
				customerNotes: 'Can I get a verification SMS?',
				companyNotes: 'Likes sports.',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 2,
				employeeId: 1,
				customerId: 1,
			},
			// Same time, same service, different employee, different customer
			{
				start: this.getDate('next', 'Tuesday', '10:00'),
				status: Status.BOOKED,
				customerNotes: '',
				companyNotes: 'Cancelled last appointment.',
				color: '#8E33FF',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 1,
				employeeId: 2,
				customerId: 3,
			},
			// Different time, same service, same employee, different customer
			{
				start: this.getDate('next', 'Tuesday', '12:00'),
				status: Status.BOOKED,
				customerNotes: '',
				companyNotes: 'She is a regular.',
				color: '#00B8D9',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 1,
				employeeId: 1,
				customerId: 4,
			},
			// Canceled appointment
			{
				start: this.getDate('next', 'Tuesday', '15:00'),
				status: Status.CANCELLED,
				customerNotes: 'I will be out of town.',
				companyNotes: '',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 1,
				employeeId: 1,
				customerId: 1,
			},
			// Completed appointment
			{
				start: this.getDate('last', 'Tuesday', '10:00'),
				status: Status.COMPLETED,
				customerNotes: '',
				companyNotes: 'Always leaves a tip.',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 1,
				userId: 1,
				serviceId: 1,
				employeeId: 2,
				customerId: 2,
			},
			// Company 2
			{
				start: this.getDate('next', 'Tuesday', '10:00'),
				status: Status.BOOKED,
				customerNotes: 'Could I get a discount?',
				companyNotes: 'Make a discount if he is on time.',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 2,
				userId: 1,
				serviceId: 3,
				employeeId: 4,
				customerId: 2,
			},
			// Company 2 Different time, same service, same employee, different customer
			{
				start: this.getDate('next', 'Tuesday', '11:00'),
				status: Status.BOOKED,
				customerNotes: '',
				companyNotes: 'If he is late, cancel the appointment.',
				color: '#22C55E',
				publicId: uuidv4(),
				companyId: 2,
				userId: 1,
				serviceId: 3,
				employeeId: 4,
				customerId: 6,
			},
			// Company 2 Different time & day
			{
				start: this.getDate('next', 'Wednesday', '15:00'),
				status: Status.BOOKED,
				customerNotes: '',
				companyNotes: '',
				color: '#00A76F',
				publicId: uuidv4(),
				companyId: 2,
				userId: 1,
				serviceId: 3,
				employeeId: 4,
				customerId: 6,
			},
		];
	};

	private records = async (): Promise<Appointment[]> => {
		const appointmentPromises = this.data().map(async appointment => {
			const newAppointment: Appointment = new Appointment();
			assignIfDefined(newAppointment, appointment);
			newAppointment.end = await this.getEndDate(appointment.start, appointment.serviceId);
			return newAppointment;
		});

		const appointments: Appointment[] = await Promise.all(appointmentPromises);

		return appointments;
	};

	public seed = async () => {
		try {
			const records = await this.records();
			await Appointment.save(records);
		} catch (err) {
			console.error(err);
		}
	};

	/*
		Calculate the date and time for the next or last occurrence of a specified weekday (like 'Tuesday') 
		at a given time (like '10:00'), formatted as "YYYY-MM-DD HH:mm", ensuring that it skips the current 
		day if it matches the specified weekday.
	*/
	private getDate = (
		occurrenceType: OccurrenceType,
		dayOfWeek: DayOfWeek,
		time: string,
	): Date => {
		const days: DayOfWeek[] = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const [hour, minute] = time.split(':').map(Number);

		// Find the index for the specified day
		const dayIndex = days.indexOf(dayOfWeek);

		if (dayIndex === -1 || isNaN(hour) || isNaN(minute)) {
			throw new Error('Invalid day or time');
		}

		let targetDay = dayjs().day(dayIndex);

		if (occurrenceType === 'next') {
			// Move to next week's day if today is the target day or if the time has already passed
			if (targetDay.isSame(dayjs(), 'day') || targetDay.isBefore(dayjs())) {
				targetDay = targetDay.add(1, 'week');
			}
		} else if (occurrenceType === 'last') {
			// Move to last week's day if today is the target day or if the time has not yet come
			if (targetDay.isSame(dayjs(), 'day') || targetDay.isAfter(dayjs())) {
				targetDay = targetDay.subtract(1, 'week');
			}
		} else {
			throw new Error('Invalid value for "occurrenceType". Use "next" or "last".');
		}

		// Set the specified time and return as a Date object
		return targetDay.hour(hour).minute(minute).second(0).millisecond(0).toDate();
	};

	private getEndDate = async (start: Date, serviceId): Promise<Date> => {
		const service = await Service.findOne({
			where: { id: serviceId },
		});
		if (!service) {
			throw new Error(`Service with id: ${serviceId} does not exist.`);
		}
		const end = dayjs(start).add(service.duration, 'minute').toDate();
		return end;
	};
}
