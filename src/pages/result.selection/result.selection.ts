import { IonicPage } from 'ionic-angular';
import { RecommActions } from '../../actions/recomm.actions';
import { EnhancePage } from './../enhance/enhance';
import { ResultPage } from '../result/result';
import { PlacePage } from './../place/place';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, App, NavParams } from 'ionic-angular';
import { RecommendationService } from "../../services/recommendation.service";
import { captureState, isFormFilled } from '../../utils/common.util';
import { Pagination, Place } from "../../models/place.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../models/state.model";
import { AttractionsActions } from "../../actions/attractions.actions";
import { PlaceService } from "../../services/place.service";
import { UpPropagationParams } from '../../models/recommendation.model';
import { LoadingService } from '../../services/loading.service';
import { AlertService } from '../../services/alert.service';

@IonicPage()
@Component({
	selector: 'page-result-selection',
	template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>{{title}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
			
				<ion-item (click)="details(place)" *ngFor="let place of selectedPlaces">
					<ion-avatar item-start>
						<img [src]="place.photo">
					</ion-avatar>
					<ion-label item-inner>
						<h2>{{place.name}}</h2>
						<p>{{place.formatted_address}}</p>
					</ion-label>
					<ion-checkbox item-end (ionChange)="check($event, place)" color="sky" checked="false"></ion-checkbox>
					
				</ion-item>
			
      </ion-list>
    </ion-content>
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">Lanjut</button> 
    </ion-footer>

  `
})
export class ResultSelectionPage {
	private selectedClasses: string[] = [];
	private selectedPlaces: Place[] = [];
	private storedPlaces: Place[] = [];
	private params: UpPropagationParams;
	private selectedRecomms: string[] = [];
	private backtrackedClasses: any;
	private alert: any;
	private title = "Hasil Rekomendasi";
	places: Place[] = [];
	loader: Loading;
	limit = 15
	offset = 0;

	constructor(private attractionsActions: AttractionsActions,
		private store: Store<AppState>,
		public navCtrl: NavController, private placeService: PlaceService,
		private app: App, private navParams: NavParams,
		private recommActions: RecommActions,
		private recommService: RecommendationService,
		public loadingService: LoadingService,
		public alertService: AlertService) {
		
		this.loadingService.presentLoading();
		this.params = this.navParams.get("params");
		console.log("PARAMS", this.params);
		if (this.params)
			if (this.params.assigned)
				// if (this.params.assigned.length > 0)
					this.recommService.upPropagation(this.params).subscribe(data => {
						console.log("data", data);
						this.selectedPlaces = data;
						this.loadingService.stopLoading();
					})
	}

	check(data: any, value: Place) {
		if (data.checked) {
			this.selectedRecomms.push(value.name);
			this.storedPlaces.push(value);
		}
		else {
			let idx = this.selectedRecomms.indexOf(value.name);
			if (idx > -1) this.selectedRecomms.splice(idx, 1);
			let idx2 = this.storedPlaces.indexOf(value);
			if (idx2 > -1) this.storedPlaces.splice(idx2, 1);
		}
		if(this.selectedRecomms.length > 0)
			this.title = `${this.selectedRecomms.length} Item Terpilih`;
		else
			this.title = "Hasil Rekomendasi";
		console.log("recomms", this.selectedRecomms);
		console.log("stored places", this.storedPlaces);
	}

	navigate() {
		let check = isFormFilled({ recomms: this.selectedRecomms });
		if (check) {
			if (this.selectedRecomms.length > 0) {
				let recomm: Place;
				for (let i = 0; i < this.selectedPlaces.length; i++) {
					if (this.selectedRecomms[0] == this.selectedPlaces[i].name) {
						recomm = this.selectedPlaces[i];
						break;
					}
				}
				this.navCtrl.push(ResultPage, { recomm: recomm });
			}
		} else {
			this.alertService.presentAlertWithCallback("", "Anda tidak memilih rekomendasi, apakah anda ingin mengulangi proses rekomendasi?", "Tidak", "Iya, ulangi").then(status=>{
				if(status)
					this.navCtrl.setRoot('RecommendationPage');
			});
		}
	}

	details(place: Place) {
		this.store.dispatch(this.attractionsActions.selectPlace(place));
		this.app.getRootNav().push(PlacePage);
	}
}
