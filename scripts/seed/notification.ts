import { Notification } from '../../src/api/models/notification.js';
import { assignIfDefined } from '../../src/api/tools/general.js';
import { MessageChannel } from '../../src/api/types/controller/notification.js';

export class NotificationSeeder {
	constructor() {
		// Do nothing
	}

	private data = () => {
		return [
			{
				companyId: 1,
				messageChannel: MessageChannel.SMS,
				createCustomerEmailNow: true,
				createCustomerMessageNow: false,
				createEmployeeEmailNow: true,
				createOwnerEmailNow: true,
				remindCustomerEmailOneDayBefore: true,
				remindCustomerMessageOneDayBefore: false,
				remindCustomerEmailOneHourBefore: true,
				remindCustomerMessageOneHourBefore: false,
				rescheduleCustomerEmailNow: true,
				rescheduleCustomerMessageNow: false,
				rescheduleEmployeeEmailNow: true,
				rescheduleOwnerEmailNow: true,
				cancelCustomerEmailNow: true,
				cancelCustomerMessageNow: false,
				cancelEmployeeEmailNow: true,
				cancelOwnerEmailNow: true,
			},
			{
				companyId: 2,
				messageChannel: MessageChannel.VIBER,
			},
			{
				customerId: 1,
				messageChannel: MessageChannel.SMS,
			},
			{
				customerId: 2,
				messageChannel: MessageChannel.VIBER,
			},
		];
	};

	private records = (): Notification[] => {
		const Notifications: Notification[] = this.data().map(notification => {
			const newNotification = new Notification();
			assignIfDefined(newNotification, notification);
			return newNotification;
		});

		return Notifications;
	};

	public seed = async () => {
		try {
			await Notification.save(this.records());
		} catch (err) {
			console.error(err);
		}
	};
}
