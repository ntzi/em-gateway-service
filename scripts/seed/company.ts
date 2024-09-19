import { Company } from '../../src/api/models/company.js';
import { assignIfDefined } from '../../src/api/tools/general.js';
import { Plans } from '../../src/api/types/controller/company.js';

export class CompanySeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				email: 'hello@eclipsehair.com',
				name: 'Eclipse Hair Studio',
				phoneCode: '30',
				phoneNumber: '1234567890',
				fullDescription: '',
				shortDescription: 'Chic cuts & styles in a modern ambiance.',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/company/hair_studio.png',
				coverPhotoUrl:
					'https://storage.googleapis.com/checkbird-local/default/company/default_cover.jpg',
				plan: Plans.PREMIUM,
				locationId: 1,
				userId: 1,
			},
			{
				email: 'info@dogwalker.com',
				name: 'DogWalker',
				phoneCode: '30',
				phoneNumber: '1234567890',
				fullDescription: '',
				shortDescription: 'Professional haircuts for all styles.',
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/company/hair_studio.png',
				coverPhotoUrl:
					'https://storage.googleapis.com/checkbird-local/default/company/default_cover.jpg',
				plan: Plans.PRO,
				locationId: 2,
				userId: 2,
			},
		];
	};

	private records = (): Company[] => {
		const companies: Company[] = this.data().map(company => {
			const newCompany = new Company();
			assignIfDefined(newCompany, company);
			return newCompany;
		});

		return companies;
	};

	public seed = async () => {
		try {
			await Company.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
