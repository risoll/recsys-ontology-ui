import { LoadingService } from './../../services/loading.service';
import { PlacePage } from './../place/place';
import { Pagination } from './../../models/place.model';
import { PlaceService } from './../../services/place.service';
import { AttractionsActions } from './../../actions/attractions.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavController, LoadingController, Loading, App, IonicPage } from 'ionic-angular';
import { Place } from "../../models/place.model";
import { AppState } from "../../models/state.model";

@IonicPage()
@Component({
  selector: 'page-attractions',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Jelajah</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
				<ion-item (click)="details(place)" *ngFor="let place of places">
					<ion-avatar item-start>
						<img [src]="place.photo">
					</ion-avatar>
					<h2>{{place.name}}</h2>
					<p>{{place.formatted_address}}</p>
				</ion-item>
      </ion-list>
      <button color="fire" ion-button block style="height: 10%;" (click)="loadMore()">Tampilkan lebih banyak</button> 
    </ion-content>
  `,
})
export class AttractionsPage {
  places: Place[] = [];
  loader: Loading;
  limit = 15
  offset = 0;

  constructor(private attractionsActions: AttractionsActions,
  private store: Store<AppState>, public loadingService: LoadingService,
  public navCtrl: NavController, private placeService: PlaceService,
  private app: App) {
    this.loadingService.presentLoading();
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
      this.loadingService.stopLoading();
    })
  }

  loadMore(){
    let pagination = <Pagination>{
      limit: 15,
      offset: this.offset
    };
    this.getPlaces(pagination);
    this.offset += 15;
  }


}
