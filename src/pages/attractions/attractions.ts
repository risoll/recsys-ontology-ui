import { PlacePage } from './../place/place';
import { Pagination } from './../../models/place.model';
import { PlaceService } from './../../services/place.service';
import { AttractionsActions } from './../../actions/attractions.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';  

import { NavController, LoadingController, Loading, App } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, PhotosResponse, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import { Place } from "../../models/place.model";
import { AppState } from "../../models/state.model";

@Component({
  selector: 'page-attractions',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Browse</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-grid>
          <button (click)="details(place)" ion-item *ngFor="let place of places">
            <ion-row>
              <ion-col col-3>
                  <ion-avatar item-start>
                    <img [src]="place.photo">
                  </ion-avatar>
              </ion-col>
              <ion-col col-9>
                  <h2>{{place.name}}</h2>
                  <p>{{place.formatted_address}}</p>
              </ion-col>
            </ion-row>
          </button>
        </ion-grid>
      </ion-list>
      <button ion-button block style="height: 10%;" (click)="loadMore()">Load More</button> 
    </ion-content>
  `,
})
export class AttractionsPage {
  places: Place[] = [];
  loader: Loading;
  limit = 15
  offset = 0;

  constructor(private attractionsActions: AttractionsActions, 
  private store: Store<AppState>, public loadingCtrl: LoadingController, 
  public navCtrl: NavController, private placeService: PlaceService,
  private app: App) {
    this.presentLoading();
    this.loadMore();
  }

  details(place: Place){
    this.store.dispatch(this.attractionsActions.selectPlace(place));
    this.app.getRootNav().push(PlacePage);
  }

  getPlaces(pagination: Pagination){
    this.placeService.getPlaces(pagination).subscribe(places=>{
      this.places = this.places.concat(places);
      this.store.dispatch(this.attractionsActions.setAttractionsLoadStatus("loaded"));
      this.stopLoading();
    })
  }

  loadMore(){
    let pagination = <Pagination>{
      limit: 15,
      offset: this.offset
    }
    this.getPlaces(pagination);
    this.offset += 15;
  }

  stopLoading(){
    this.loader.dismiss();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

}
