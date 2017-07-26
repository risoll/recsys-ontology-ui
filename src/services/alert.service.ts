import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
	constructor(public alertCtrl: AlertController) { }

	presentAlert(title: string = "", message: string) {
		let alert = this.alertCtrl.create(
			{
				title: title,
				subTitle: message,
				buttons: [
					{
						text: 'OK'
					}
				]
			});

		return alert.present();
	}

	presentErrorAlert(message: string) {
		return this.presentAlert("An error has occurred.", message);
	}

	presentAlertWithCallback(title: string = "", message: string, text1: string = "Tidak", text2: string = "Ya"): Promise<boolean> {
		return new Promise((resolve, reject) => {
			const confirm = this.alertCtrl.create({
				title,
				message,
				buttons: [{
					text: text1,
					role: 'cancel',
					handler: () => {
						confirm.dismiss().then(() => resolve(false));
						return false;
					}
				}, {
					text: text2,
					handler: () => {
						confirm.dismiss().then(() => resolve(true));
						return false;
					}
				}]
			});

			return confirm.present();
		});
	}
}
