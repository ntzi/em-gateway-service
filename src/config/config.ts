import dotenv from 'dotenv';

import { localConfig } from './environments/local.js';
import { testConfig } from './environments/test.js';
import { testLocalConfig } from './environments/testLocal.js';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const configEnvironments = {
	local: localConfig,
	test: testConfig,
	testLocal: testLocalConfig,
};

const config = () => {
	const env = process.env.NODE_ENV || 'local';
	return configEnvironments[env];
};

export default config();
