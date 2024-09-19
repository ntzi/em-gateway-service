import { Location } from '../../src/api/models/location.js';
import { assignIfDefined } from '../../src/api/tools/general.js';

export class LocationSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				name: 'Big Nick',
				longitude: 23.7357286,
				latitude: 37.9564509,
				address: 'Leoforos Vouliagmenis 145',
				postalCode: 11631,
				city: 'Athens',
				country: 'Greece',
				radius: 1000,
				companyId: 1,
			},
			{
				name: 'Ovio',
				longitude: 23.732726,
				latitude: 37.9747815,
				address: 'Apollonos 4',
				postalCode: 10557,
				city: 'Athens',
				country: 'Greece',
				radius: 2000,
				companyId: 2,
			},
		];
	};

	private records = (): Location[] => {
		const locations: Location[] = this.data().map(location => {
			const newLocation = new Location();
			assignIfDefined(newLocation, location);
			newLocation.geoLocation = {
				type: 'Point',
				coordinates: [location.longitude, location.latitude],
			};
			return newLocation;
		});

		return locations;
	};

	public seed = async () => {
		try {
			await Location.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
