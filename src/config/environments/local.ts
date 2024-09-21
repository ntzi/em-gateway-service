export const localConfig = {
	nodeEnv: 'local',
	api: {
		port: 3000,
	},
	logs: {
		level: 'info',
	},
	databases: {
		postgres: {
			host: 'postgres',
			port: '5432',
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
			url: 'http://events-service:3000',
		},
		fans: {
			url: 'http://fans-service:3000',
		},
	}
};
