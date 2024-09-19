import { User } from '../../src/api/models/user.js';
import { assignIfDefined } from '../../src/api/tools/general.js';
import { Roles } from '../../src/api/types/auth/authorized.js';

export class UserSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				auth0UserId: 'auth0|63bf0de279a669638fac20c2',
				role: Roles.ADMIN,
				personId: 1,
			},
			{
				auth0UserId: 'auth0|63c672f28696a0aa102f5eac',
				role: Roles.OWNER,
				personId: 2,
			},
			{
				auth0UserId: 'auth0|random-key',
				role: Roles.USER,
				personId: 3,
			},
			{
				auth0UserId: 'auth0|random-key2',
				role: Roles.USER,
				personId: 4,
			},
		];
	};

	private records = (): User[] => {
		const users: User[] = this.data().map(user => {
			const newUser = new User();
			assignIfDefined(newUser, user);
			return newUser;
		});

		return users;
	};

	public seed = async () => {
		try {
			await User.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
