import { RecommendationPage } from './../recommendation/recommendation';
import { ResultSelectionPage } from './../result.selection/result.selection';
import { Question, ColsQuestion, NodeValues } from './../../models/recommendation.model';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, NavParams, IonicPage } from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";
import { isFormFilled } from "../../utils/common.util";

@IonicPage()
@Component({
  selector: 'page-begin',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <ion-title>Recommender</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">
     
    </ion-content>

  `
})
export class BeginPage {

  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][];
  private divider = 2;
  private counter = 0;  
  private questionsValue: NodeValues = {};

  private direction: string;
  private prevSelected: string[][];
  private selected: string[] = [];
  private lastPage: boolean = false;
  loader: Loading;
  consoleObject = (str, obj) => console.log(str, JSON.parse(JSON.stringify(obj)));

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  private navParams: NavParams,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {
    this.questionsValue = this.navParams.get("selected");
    console.log("DATA", this.questionsValue);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      message: 'Please at least select one type',
      buttons: ['OK']
    });
    alert.present();
  }

  navigate(page: any, params: any = {}){
    // this.app.getRootNav().push(page, params, {animate: true, direction: 'forward'});
    this.navCtrl.push(page, params);
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
