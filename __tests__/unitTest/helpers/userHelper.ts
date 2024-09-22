import { User } from '../../../src/api/models/user.js';

const createUsers = async () => {
	const data = [
		{
			email: 'example@email.com',
			password: 'password',
		},
	];

	const users: User[] = [];
	data.map((user) => {
		const newUser: User = new User();
		newUser.email = user.email;
		newUser.password = user.password;
		users.push(newUser);
	});

	try {
		await User.save(users);
	} catch (err) {
		console.error(err);
	}

	return users;
};

export { createUsers };
