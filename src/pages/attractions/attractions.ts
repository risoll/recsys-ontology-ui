import { AttractionsActions } from './../../actions/attractions.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';  

import { NavController, LoadingController, Loading } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, PhotosResponse, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import { AppState } from "../../services/app-state";

@Component({
  selector: 'page-home',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Attractions</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content class="card-background-page">
      <ion-card *ngFor="let photo of photos">
        <img [src]="photo.photo"/>
        <div class="card-title">{{photo.name}}</div>
        <div class="card-subtitle">{{photo.address}}</div>
      </ion-card>
    </ion-content>
  `,
  styles: [`
    .layer {
      background-color: rgba(248, 247, 216, 0.7);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    page-home .card-background-page ion-card {
      position: relative;
      width: 200px;
      height:200px;
      text-align: center; }

    page-home .card-background-page .card-title {
      position: absolute;
      top: 36%;
      font-size: 2.0em;
      width: 100%;
      font-weight: bold;
      color: #fff; }

    page-home .card-background-page .card-subtitle {
      font-size: 1.0em;
      position: absolute;
      top: 60%;
      width: 100%;
      color: #fff; }

  `]
})
export class AttractionsPage {
  photosParams = <PhotosParam> {
    lat: -6.917464,
    lng: 107.619123,
    radius: 5,
    maxWidth: 200,
    maxHeight: 200
  };

  photos$: Observable<PhotosResponse[]>;
  loadStatus$: Observable<string>;
  photos: PhotosResponse[];
  loader: Loading;

  constructor(private attractionsActions: AttractionsActions, 
  private store: Store<AppState>, public loadingCtrl: LoadingController, 
  public navCtrl: NavController, private googleService: GoogleService) {
    this.presentLoading();
    this.googleService.getPhotos(this.photosParams).subscribe(photos=>{
      this.photos = photos;
      this.store.dispatch(this.attractionsActions.setAttractionsLoadStatus("loaded"));
      this.stopLoading();
    })
    this.loadStatus$ = this.store.select(state => state.attractions.attractionsLoadStatus);
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
