import { Person } from '../../src/api/models/person.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

export class PersonSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				name: 'nikos-admin',
				email: 'nikos+admin@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567890',
				address: 'Ermou 156, Athens, Greece',
				birthDate: new Date('1990-01-01'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_13.jpg',
			},
			{
				name: 'nikos-user',
				email: 'nikos+user@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567891',
				address: 'Ermou 24, Athens, Greece',
				birthDate: new Date('1991-01-01'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_17.jpg',
			},
			{
				name: 'Linda Chase',
				email: 'linda@eclipsehair.com',
				phoneCode: '30',
				phoneNumber: '1234567892',
				address: 'Ermou 212, Athens, Greece',
				birthDate: new Date('1997-05-15'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_1.jpg',
			},
			{
				name: 'Fergus Chan',
				email: 'nikos+fergus-chan@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567893',
				address: 'Ermou 57, Athens, Greece',
				birthDate: new Date('1999-05-15'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_4.jpg',
			},
			{
				name: 'Benedict Buffone',
				email: 'nikos+benedict-buffone@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567894',
				address: 'Ermou 228, Athens, Greece',
				birthDate: new Date('1992-09-25'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_9.jpg',
			},
			{
				name: 'Orfeas Varley',
				email: 'nikos+orfeas-varley@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567895',
				address: 'Ermou 207, Athens, Greece',
				birthDate: new Date('1983-03-05'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_3.jpg',
			},
			{
				name: 'Pinelopi Stefanidis',
				email: 'nikos+pinelopi-stefanidis@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567896',
				address: 'Ermou 118, Athens, Greece',
				birthDate: new Date('1997-10-03'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_23.jpg',
			},
			{
				name: 'Koralia Xanthopoulos',
				email: 'nikos+koralia-xanthopoulos@checkbird.app',
				phoneCode: '30',
				phoneNumber: '1234567897',
				address: 'Ermou 287, Athens, Greece',
				birthDate: new Date('1987-05-09'),
				photoUrl: 'https://storage.googleapis.com/checkbird-local/default/person/avatar_8.jpg',
			},
		];
	};

	private records = (): Person[] => {
		const persons: Person[] = this.data().map(person => {
			const newPerson = new Person();
			assignIfDefined(newPerson, person);
			return newPerson;
		});

		return persons;
	};

	public seed = async () => {
		try {
			await Person.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
