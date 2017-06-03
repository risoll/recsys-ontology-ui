import { Pagination } from './../../models/place.model';
import { PlaceService } from './../../services/place.service';
import { AttractionsActions } from './../../actions/attractions.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';  

import { NavController, LoadingController, Loading, ViewController, NavParams, Platform } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, PhotosResponse, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import { AppState } from "../../services/app-state";
import { Place } from "../../models/place.model";

@Component({
  selector: 'page-explanation',
  template: `
    <ion-header>
        <ion-toolbar>
            <ion-title>
            Explanation
            </ion-title>
            <ion-buttons start>
            <button ion-button (click)="dismiss()">
                <span ion-text color="primary" showWhen="ios">Cancel</span>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
            </button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <p style="padding: 4%;">
        {{explanation}}
        </p>
    </ion-content>
  `,
})
export class ExplanationPage {
  loader: Loading;
  explanation: string;

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private loadingCtrl: LoadingController
  ) {
      this.explanation = params.get("explanation");
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
