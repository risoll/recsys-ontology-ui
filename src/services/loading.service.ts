import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';
@Injectable()
export class LoadingService {
	constructor(public loadingCtrl: LoadingController) { }
	private loader:Loading;

	presentLoading(message: string = "Mohon tunggu..") {
		this.loader = this.loadingCtrl.create({
			content: message
		});
		this.loader.present();
	}

	stopLoading(){
		this.loader.dismiss();
	}
}