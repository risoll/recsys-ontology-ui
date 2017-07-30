import {IonicPage} from 'ionic-angular';
import {RecommActions} from '../../actions/recomm.actions';
import {EnhancePage} from './../enhance/enhance';
import {ResultPage} from '../result/result';
import {PlacePage} from './../place/place';
import {Component} from '@angular/core';

import {NavController, LoadingController, Loading, AlertController, App, NavParams} from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";
import {captureState, isFormFilled} from '../../utils/common.util';
import {Pagination, Place} from "../../models/place.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../models/state.model";
import {AttractionsActions} from "../../actions/attractions.actions";
import {PlaceService} from "../../services/place.service";
import {UpPropagationParams} from '../../models/recommendation.model';
import {LoadingService} from '../../services/loading.service';
import {AlertService} from '../../services/alert.service';

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
    <ion-content padding>
      <ion-list style="padding-bottom: 10%">

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
      <div *ngIf="selectedPlaces.length == 0" style="text-align: center">
        <p>Tidak ditemukan rekomendasi dalam preferensi anda, ingin mengulangi proses rekomendasi dari awal?</p>
        <button (click)="reset()" color="fire" ion-button icon-left>
          <ion-icon name="refresh"></ion-icon>
          Ulangi Proses Rekomendasi
        </button>
      </div>
      <p style="text-align: center" *ngIf="mode == 2">
        Dengan menekan tombol selesai, anda akan mengakhiri proses rekomendasi <br>
        dan dianggap puas dengan hasil rekomendasi yang ada.
      </p>
    </ion-content>
    <ion-footer *ngIf="selectedPlaces.length > 0" style="height: 10%;">
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">{{submitText}}</button>
    </ion-footer>

  `
})
export class ResultSelectionPage {
  private selectedClasses: string[] = [];

  private selectedPlaces: Place[] = [];
  private storedPlaces: Place[] = [];
  private mode: number = 0;
  private submitText: string = "";
  private params: UpPropagationParams;
  private selectedRecomms: string[] = [];
  private staticTitle = "";
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
    let places = this.navParams.get("places");
    console.log("selected", this.places);
    if(places){
      this.selectedPlaces = places;
      this.mode = 2;
      this.submitText = "Selesai";
      this.title = `${this.selectedPlaces.length} Hasil Rekomendasi`;
      this.staticTitle = this.title;
      this.loadingService.stopLoading();
    }
    else if (this.params)
      if (this.params.assigned)
      // if (this.params.assigned.length > 0)
        this.recommService.upPropagation(this.params).subscribe(data => {
          this.mode = 2;
          this.submitText = "Lanjut";
          console.log("data", data);
          this.selectedPlaces = data;
          this.title = `${this.selectedPlaces.length} Hasil Rekomendasi`;
          this.staticTitle = this.title;
          this.loadingService.stopLoading();
        })
  }

  reset() {
    this.navCtrl.setRoot('MethodSelectionPage');
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
    if (this.selectedRecomms.length > 0)
      this.title = `${this.selectedRecomms.length} Rekomendasi Terpilih`;
    else
      this.title = this.staticTitle;
    console.log("recomms", this.selectedRecomms);
    console.log("stored places", this.storedPlaces);
  }

  navigate() {
    let check = isFormFilled({recomms: this.selectedRecomms});
    if (check) {
      // if (this.selectedRecomms.length > 0) {
      // 	let recomms: Place[];
      // 	for (let i = 0; i < this.selectedPlaces.length; i++) {
      // 		if (this.selectedRecomms[i] == this.selectedPlaces[i].name) {
      // 			recomms.push(this.selectedPlaces[i]);
      // 		}
      // 	}
      // 	this.navCtrl.push(ResultPage, { recomm: recomm });
      // }

      let filtered = this.selectedPlaces.filter(place=>{
        return this.selectedRecomms.indexOf(place.name) > -1
      });

      console.log("FILTERED", filtered);

      this.navCtrl.push(ResultPage, {recomms: filtered });
    } else {
      this.alertService.presentAlertWithCallback("", "Anda tidak memilih rekomendasi, apakah anda ingin mengulangi proses rekomendasi dari awal?", "Tidak", "Iya, ulangi").then(status => {
        if (status)
          this.navCtrl.setRoot('MethodSelectionPage');
      });
    }
  }

  details(place: Place) {
    this.store.dispatch(this.attractionsActions.selectPlace(place));
    this.app.getRootNav().push(PlacePage);
    // this.navCtrl.push(PlacePage);
  }
}
