import { Employee } from '../../src/api/models/employee.js';
import { assignIfDefined } from '../../src/api/tools/general.js';
import { EmployeeRoles, EmployeeStatus } from '../../src/api/types/controller/employee.js';

export class EmployeeSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				start: new Date('2023-01-01'),
				end: new Date('2033-01-01'),
				daysOffAnnual: 20,
				daysOffLeft: 19,
				daysOffTaken: 1,
				salaryAnnual: 50000,
				role: EmployeeRoles.OWNER,
				status: EmployeeStatus.ACTIVE,
				userId: 1,
				personId: 1,
				companyId: 1,
			},
			// No user
			{
				start: new Date('2023-09-01'),
				end: new Date('2024-09-01'),
				daysOffAnnual: 20,
				daysOffLeft: 20,
				daysOffTaken: 0,
				salaryAnnual: 30000,
				role: EmployeeRoles.MANAGER,
				status: EmployeeStatus.ACTIVE,
				userId: null,
				personId: 6,
				companyId: 1,
			},
			// No user
			{
				start: new Date('2023-09-01'),
				end: new Date('2024-09-01'),
				daysOffAnnual: 20,
				daysOffLeft: 20,
				daysOffTaken: 0,
				salaryAnnual: 30000,
				role: EmployeeRoles.STAFF,
				status: EmployeeStatus.ON_VACATION,
				userId: null,
				personId: 5,
				companyId: 1,
			},
			{
				start: new Date('2023-06-01'),
				end: new Date('2033-06-01'),
				daysOffAnnual: 20,
				daysOffLeft: 20,
				daysOffTaken: 0,
				salaryAnnual: 60000,
				role: EmployeeRoles.OWNER,
				status: EmployeeStatus.ACTIVE,
				userId: 2,
				personId: 2,
				companyId: 2,
			},
		];
	};

	private records = (): Employee[] => {
		const employees: Employee[] = this.data().map(employee => {
			const newEmployee = new Employee();
			assignIfDefined(newEmployee, employee);
			return newEmployee;
		});

		return employees;
	};

	public seed = async () => {
		try {
			await Employee.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
