import bcrypt from 'bcryptjs';

import { User } from '../../src/api/models/user.js';

export class UserSeeder {
	constructor() {
		// Do nothing
	}

	private hashPassword = async (password: string) => {
		return await bcrypt.hash(password, 10);
	};

	private data = async () => {
		return [
			{
				email: 'example@email.com',
				password: await this.hashPassword('password'),
			},
		];
	};

	private records = async (): Promise<User[]> => {
		const data = await this.data();
		const users: User[] = data.map((user) => {
			const newUser = new User();
			newUser.email = user.email;
			newUser.password = user.password;
			return newUser;
		});

		return users;
	};

	public seed = async () => {
		try {
			const records = await this.records();
			await User.save(records);
		} catch (err) {
			console.error(err);
		}
	};
}
