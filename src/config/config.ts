import dotenv from 'dotenv';

import { localConfig } from './environments/local.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const configEnvironments = {
	local: localConfig,
};

const config = () => {
	const env = process.env.NODE_ENV || 'local';
	return configEnvironments[env];
};

export default config();
