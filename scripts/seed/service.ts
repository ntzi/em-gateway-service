import { Employee } from '../../src/api/models/employee.js';
import { Service } from '../../src/api/models/service.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

export class ServiceSeeder {
	constructor() {
		// Do nothing
	}

	private data = employees => {
		return [
			{
				name: 'Haircut',
				category: 'Self Care',
				price: '15',
				companyId: 1,
				duration: 15,
				preparation: 0,
				shortDescription: 'Full Haircut',
				fullDescription: 'Get a stylish full haircut.',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/service/haircut.png',
				employees: [employees[0], employees[1], employees[2]],
			},
			{
				name: 'Haircut & Beard Trim',
				category: 'Self Care',
				price: '19.90',
				companyId: 1,
				duration: 30,
				preparation: 15,
				shortDescription: 'Full Haircut and Beard Trim',
				fullDescription: 'Get a modern full haircut and a matching beard trim',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/service/stylist.png',
				employees: [employees[0], employees[1]],
			},
			{
				name: 'Hair Wash',
				category: 'Self Care',
				price: '8',
				companyId: 1,
				duration: 20,
				preparation: 0,
				shortDescription: 'Complete hair wash',
				fullDescription: 'Enjoy the hair treatment that you deserve.',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/service/stylist.png',
				employees: [employees[0], employees[1], employees[2]],
			},
			{
				name: 'Haircut',
				category: 'Self Care',
				price: '12',
				companyId: 2,
				duration: 15,
				shortDescription: 'Modern Haircut',
				fullDescription: 'Get a modern full haircut.',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/service/haircut.png',
				employees: [employees[3]],
			},
		];
	};

	private records = (employees): Service[] => {
		const services: Service[] = this.data(employees).map(service => {
			const newService = new Service();
			assignIfDefined(newService, service);
			return newService;
		});

		return services;
	};

	public seed = async () => {
		try {
			const employees = await Employee.find();
			await Service.save(this.records(employees));
		} catch (err) {
			console.error(err);
		}
	};
}
