export const testLocalConfig = {
	nodeEnv: 'testLocal',
	api: {
		port: 3000,
	},
	logs: {
		level: 'info',
	},
	databases: {
		postgres: {
			host: 'localhost',
			port: '5679',
			username: 'admin',
			password: 'password',
			database: 'event-manager',
			migrations: ['src/api/migrations/**/*.{ts,js}'],
			entities: ['src/api/models/**/*.{ts,js}'],
			synchronize: true,
			logging: false,
		},
		redis: {
			host: 'redis',
			port: 6379,
		},
	},
	services: {
		events: {
			url: 'http://localhost:4001',
		},
		fans: {
			url: 'http://localhost:4002',
		},
	},
	auth: {
		secretKey: process.env.JWT_SECRET || 'my-secret-key',
		expirationTime: '1d',
	},
};
