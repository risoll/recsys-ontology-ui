import { Store } from '@ngrx/store';
import { IpApi } from './../../models/user.model';
import { ResultPage } from './../result/result';
import { FeedbackPage } from './../feedback/feedback';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, App } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import {RecommendationService} from "../../services/recommendation.service";
import { AppState } from "../../services/app-state";
import { UserActions } from "../../actions/user.actions";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-recommendation',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>For You</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content class="card-background-page">
      <ion-card>
        <ion-card-content>
          <ion-list *ngFor="let questions of generalQuestions">
            <button ion-item (click)="navigate()">
              {{questions}}
            </button>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>

  `
})
export class RecommendationPage {

  private ipApi$: Observable<IpApi>;
  private generalQuestions: string[];
  loader: Loading;

  constructor(public navCtrl: NavController, 
  private store: Store<AppState>, 
  private userActions: UserActions, 
  private userService: UserService,
  private app: App,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {

    this.userService.ipApi().subscribe(ipApi=>{
      this.store.dispatch(this.userActions.setIpApi(ipApi));
    })

    this.presentLoading();
    this.recommendationService.generalQuestions().subscribe(questions=>{
      this.generalQuestions = questions;
      this.stopLoading();
    });

  }

  navigate(){this.app.getRootNav().push(ResultPage, {}, {animate: true, direction: 'forward'});
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
