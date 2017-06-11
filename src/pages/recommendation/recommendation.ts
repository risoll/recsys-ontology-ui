import { RecommActions } from './../../actions/recomm.actions';
import { Question, ColsQuestion } from './../../models/recommendation.model';
import { Store } from '@ngrx/store';
import { IpApi } from './../../models/user.model';
import { ResultPage } from './../result/result';
import { FeedbackPage } from './../feedback/feedback';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, App, AlertController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import {RecommendationService} from "../../services/recommendation.service";
import { UserActions } from "../../actions/user.actions";
import { UserService } from "../../services/user.service";
import { BeginPage } from "../begin/begin";
import { isFormFilled } from "../../utils/common.util";
import { AppState } from "../../models/state.model";

@Component({
  selector: 'page-recommendation',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Recommender</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">
      <ion-grid>
        <ion-row *ngFor="let cols of colsQuestions">
          <ion-col col-6 *ngFor="let col of cols.cols">
            <ion-card
              [ngClass]="{'selected': selected.indexOf(col.name) > -1}" 
              (click)=selectClass(col.name)>
              <img style="width: 100%;" [src]="col.image">
              <div class="card-title">{{col.name}}</div>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>   
      <h6 ion-text style="font-size: small;" color="ocean" class="highlight" *ngIf="selected.length == 0">Select your preferred type(s) of attractions</h6>
      <div *ngIf="selected.length > 0">
        <h6 ion-text color="sky" class="highlight">Your selection:</h6>
        <p style="top: 90%;" class="highlight">{{selected}}</p>
      </div>  
    </ion-content> 
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)=navigate()>Next</button> 
    </ion-footer>

  `
})
export class RecommendationPage {

  private ipApi$: Observable<IpApi>;
  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private divider = 2;
  loader: Loading;
  selected: string[] = [];

  constructor(public navCtrl: NavController, 
  private store: Store<AppState>, 
  private userActions: UserActions, 
  private recommActions: RecommActions,
  private userService: UserService,
  public alertCtrl: AlertController,
  private app: App,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {

    this.loadQuestions("tempat wisata");
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      message: 'Please select at least one type',
      buttons: ['OK']
    });
    alert.present();
  }

  selectClass(value: any){
    let idx = this.selected.indexOf(value);
    if(idx > -1) this.selected.splice(idx, 1);
    else this.selected.push(value);
  }

  loadQuestions(node: string){
    this.questions = [];
    this.presentLoading();
    let i = 0;
    this.recommendationService.getChildren(node).subscribe(questions=>{
      this.colsQuestions = [];
      questions.forEach(question=>{
        if(i % this.divider == 0){ 
          this.questions = [];
          for(let j = i; j < i + this.divider; j++){
            if(questions[j])
              this.questions.push({name: questions[j].name, image: questions[j].image})
          }
          this.colsQuestions.push({cols: this.questions})
        }
        i += 1;
      });
      this.stopLoading();
      if(this.colsQuestions.length == 0) this.navigate();
    });
  }

  navigate(){
    if(isFormFilled({selected: this.selected})){
      this.app.getRootNav().push(BeginPage, {selected: [this.selected], loaded: [this.colsQuestions]}, {animate: true, direction: 'forward'});
    }
    else this.showAlert(); 
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
