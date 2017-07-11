import { RecommActions } from './../../actions/recomm.actions';
import {Question, ColsQuestion, NodeValues} from './../../models/recommendation.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, IonicPage } from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";

import { BeginPage } from "../begin/begin";
import { captureState, isFormFilled } from '../../utils/common.util';
import { AppState } from "../../models/state.model";

@IonicPage()
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
            <ion-card>
              <img style="width: 100%;" [src]="col.image">
              <div class="card-title">{{col.name}}</div>
              <div class="card-subtitle" *ngIf="questionsValue[col.name] && questionsValue[col.name].pref > 0">{{questionsValue[col.name].pref * 100}}</div>
              <ion-range 
                step="10" 
                style="top: 30% !important" 
                class="card-title" 
                (ionChange)="updateValue(col.name, $event)" 
                color="danger" 
                pin="true">
              </ion-range>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>   
      <h6 ion-text style="font-size: small;" color="ocean" class="highlight">Set your preference value for each category</h6>
    </ion-content> 
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">Next</button> 
    </ion-footer>

  `
})
export class RecommendationPage {
  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private questionsValue: NodeValues = {};

  private divider = 2;
  loader: Loading;
  selected: string[] = [];

  constructor(public navCtrl: NavController,
  private store: Store<AppState>,
  private recommActions: RecommActions,
  public alertCtrl: AlertController,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {
    this.loadQuestions("tempat wisata");
  }

  updateValue(name: string, value: any){
    this.questionsValue[name] = {};
    this.questionsValue[name].pref = value.value/100;
    this.questionsValue[name].conf = 1;

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      message: 'Please set preference value at least on one category',
      buttons: ['OK']
    });
    alert.present();
  }

  loadQuestions(node: string){
    this.questions = [];
    this.presentLoading();
    let i = 0;
    this.recommendationService.getChildren(node).subscribe(questions=>{
      this.colsQuestions = [];
      questions.forEach(question=>{
        this.selected.push(question.name);
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
      if(this.colsQuestions.length == 0){
        this.store.dispatch(this.recommActions.selectRootClass(this.selected));
        this.navigate();
      }
    });
  }

  navigate(){
    let passed = false;
    if(isFormFilled({selected: this.questionsValue})){
      // this.app.getRootNav().push(BeginPage, {selected: [this.selected], loaded: [this.colsQuestions]}, {animate: true, direction: 'forward'});
      let value = 0;
      for(let key in this.questionsValue){
        value = value + this.questionsValue[key].pref;
      }
      this.selected.forEach(selected=>{
        if(!this.questionsValue[selected]){
          this.questionsValue[selected] = {};
          this.questionsValue[selected].pref = 0;
          this.questionsValue[selected].conf = 1;
        }
      })
      if(value > 0){
        passed = true;
        this.navCtrl.push(BeginPage, {selected: this.questionsValue})
      }
    }
    if(!passed) this.showAlert();
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
