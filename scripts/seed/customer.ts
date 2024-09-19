import { Customer } from '../../src/api/models/customer.js';
import { assignIfDefined } from '../../src/api/tools/general.js';
import { CustomerStatus } from '../../src/api/types/controller/customer.js';

export class CustomerSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			// A customer, an employee, a user
			{
				notes: 'Great person, totally enjoy having them.',
				status: CustomerStatus.ACTIVE,
				personId: 1,
				companyId: 1,
				userId: 1,
			},
			// A customer, an employee, a user
			{
				notes: 'Leaves nearby.',
				status: CustomerStatus.ACTIVE,
				personId: 2,
				companyId: 2,
				userId: 2,
			},
			// A customer, an employee, no user
			{
				notes: 'Has has lactose intolerance.',
				status: CustomerStatus.ACTIVE,
				personId: 5,
				companyId: 1,
				userId: null,
			},
			// A customer, an employee, no user
			{
				notes: 'Comes only once a month.',
				status: CustomerStatus.ACTIVE,
				personId: 6,
				companyId: 1,
				userId: null,
			},
			// A customer, no employee, no user
			{
				notes: 'Worst customer ever!',
				status: CustomerStatus.BANNED,
				personId: 7,
				companyId: 1,
				userId: null,
			},
			// A customer, no employee, no user
			{
				notes: 'Likes coffee extra sweet.',
				status: CustomerStatus.ACTIVE,
				personId: 8,
				companyId: 2,
				userId: 3,
			},
		];
	};

	private records = (): Customer[] => {
		const customers: Customer[] = this.data().map(customer => {
			const newCustomer = new Customer();
			assignIfDefined(newCustomer, customer);
			return newCustomer;
		});

		return customers;
	};

	public seed = async () => {
		try {
			await Customer.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
