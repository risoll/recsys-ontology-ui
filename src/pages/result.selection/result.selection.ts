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

@Component({
    selector: 'page-result-selection',
    template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Result Selection</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-grid>
          <ion-item (click)="details(place)" ion-item *ngFor="let place of selectedPlaces">
            <ion-row>
              <ion-col col-2 class="col">
                  <ion-avatar item-start>
                    <img [src]="place.photo">
                  </ion-avatar>
              </ion-col>
              <ion-col col-7 class="col">
                  <h2>{{place.name}}</h2>
                  <p>{{place.formatted_address}}</p>
              </ion-col>
              <ion-col col-1 class="checkbox">
                <ion-item>
                  <ion-checkbox (ionChange)="check($event, place)" class="item-checkbox-right" color="sky" checked="false"></ion-checkbox>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-item>
        </ion-grid>
      </ion-list>
    </ion-content>
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">Next</button> 
    </ion-footer>

  `
})
export class ResultSelectionPage {
    private selectedClasses: string[] = [];
    private selectedPlaces: Place[] = [];
    private storedPlaces: Place[] = [];
    private selectedRecomms: string[] = [];
    private backtrackedClasses: any;
    private alert: any;
    places: Place[] = [];
    loader: Loading;
    limit = 15
    offset = 0;

    constructor(private attractionsActions: AttractionsActions,
        private store: Store<AppState>, public loadingCtrl: LoadingController,
        public navCtrl: NavController, private placeService: PlaceService,
        private app: App, private navParams: NavParams,
        private recommActions: RecommActions,
        private alertCtrl: AlertController,
        private recommService: RecommendationService) {
        this.presentLoading();
        // this.loadMore();
        // let initClasses = this.navParams.get("selectedClass");
        // if (initClasses.length > 0)
        //     initClasses.forEach(element => {
        //         this.selectedClasses = this.selectedClasses.concat(element);
        //     });
        this.selectedClasses = this.navParams.get("selectedClass");
        this.selectedPlaces = this.navParams.get("selectedPlaces");
        if(this.selectedClasses)
            this.placeService.getPlacesByCategories(this.selectedClasses).subscribe(data => {
                this.selectedPlaces = data;
                this.stopLoading();
            })
        else if(this.selectedPlaces){
            this.stopLoading();
        }
        else{
            this.selectedPlaces = captureState(this.store).recomm.selectedPlaces;
            this.stopLoading();
        }
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
        console.log("recomms", this.selectedRecomms);
        console.log("stored places", this.storedPlaces);
    }

    navigate() {
        let check = isFormFilled({ recomms: this.selectedRecomms });
        if (check) {
            if (this.selectedRecomms.length == 1) {
                let recomm: Place;
                for (let i = 0; i < this.selectedPlaces.length; i++) {
                    if (this.selectedRecomms[0] == this.selectedPlaces[i].name) {
                        recomm = this.selectedPlaces[i];
                        break;
                    }
                }
                this.navCtrl.push(ResultPage, { recomm: recomm });
            }
            else if (this.selectedRecomms.length > 1) {
                this.showAlert("morethanone");
            }
        } else {
            this.showAlert("null");
        }
    }

    loadBacktrackedClasses() {
        this.recommService.traverseNode(this.selectedRecomms).subscribe(data => {
            this.backtrackedClasses = data;
            console.log("backtrack", this.backtrackedClasses);
        })
    }

    details(place: Place) {
        this.store.dispatch(this.attractionsActions.selectPlace(place));
        this.app.getRootNav().push(PlacePage);
    }

    getPlaces(pagination: Pagination) {
        this.placeService.getPlaces(pagination).subscribe(places => {
            this.places = this.places.concat(places);
            this.store.dispatch(this.attractionsActions.setAttractionsLoadStatus("loaded"));
            this.stopLoading();
        })
    }

    loadMore() {
        let pagination = <Pagination>{
            limit: 15,
            offset: this.offset
        }
        this.getPlaces(pagination);
        this.offset += 15;
    }

    showAlert(status: string) {
        if (status == "null")
            this.alert = this.alertCtrl.create({
                title: 'Oops',
                message: "It looks like that you haven't selected any recommendation, wanna go back and change some preference? ",
                buttons: [
                    { text: "No", handler: () => { } },
                    { text: "Yes", handler: () => this.navCtrl.pop() }
                ]
            });
        else if (status == "morethanone")
            this.alert = this.alertCtrl.create({
                title: 'Oops',
                message: "You seem to have doubts, wanna enhance your preference?",
                buttons: [
                    { text: "No", handler: () => { } },
                    {
                        text: "Yes", handler: () => {
                            this.store.dispatch(this.recommActions.selectPlaces(this.storedPlaces));
                            this.navCtrl.push(EnhancePage, { recomms: this.selectedRecomms });
                        }
                    }
                ]
            });
        this.alert.present();
    }

    stopLoading() {
        this.loader.dismiss();
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    }
}
