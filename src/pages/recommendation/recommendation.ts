import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import {RecommendationService} from "../../services/recommendation.service";

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
          <ion-list *ngFor="let questions of (generalQuestions$ | async)">
            <button ion-item>
              {{questions}}
            </button>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>

  `,
  styles: [`
    page-home .card-background-page ion-card {
      position: relative;
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
      top: 52%;
      width: 100%;
      color: #fff; }

  `]
})
export class RecommendationPage {

  private generalQuestions$: Observable<string[]>;

  constructor(public navCtrl: NavController, private recommendationService: RecommendationService) {
    this.generalQuestions$ = this.recommendationService.generalQuestions()
  }
}
