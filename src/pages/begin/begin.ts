import { RecommendationPage } from './../recommendation/recommendation';
import { ResultSelectionPage } from './../result.selection/result.selection';
import { Question, ColsQuestion, NodeValues } from './../../models/recommendation.model';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, NavParams, IonicPage } from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";
import { isFormFilled } from "../../utils/common.util";
import { Store } from '@ngrx/store';
import { AppState } from '../../models/state.model';
import { RecommActions } from '../../actions/recomm.actions';

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
      <h6 ion-text style="font-size: small;" color="ocean" class="highlight">Update your preference</h6>
      <ion-grid>
        <ion-row *ngFor="let cols of colsQuestions">
          <ion-col col-6 *ngFor="let col of cols.cols">
            <ion-card>
              <img style="width: 100%;" [src]="col.image">
              <div class="card-title">{{col.name}}</div>
              <div class="card-subtitle" *ngIf="findIndex(col.name) != -1">{{questionsValue[findIndex(col.name)].pref * 100}}</div>
              <ion-range 
                step="10" 
                style="top: 30% !important" 
                class="card-title" 
                (ionChange)="changeValue(col.name, $event)" 
                color="danger" 
                pin="true">
              </ion-range>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>   
    </ion-content> 
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">Next</button> 
    </ion-footer>

  `
})
export class BeginPage {

  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][];
  private divider = 2;
  private counter = 0;  
  private questionsValue: NodeValues[] = [];

  private direction: string;
  private prevSelected: string[][];
  private selected: string[] = [];
  private lastPage: boolean = false;
  loader: Loading;
  consoleObject = (str, obj) => console.log(str, JSON.parse(JSON.stringify(obj)));

  constructor(public navCtrl: NavController,

  private store: Store<AppState>,
  private recommActions: RecommActions,
  public alertCtrl: AlertController,
  private navParams: NavParams,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {
    this.questionsValue = this.navParams.get("selected");
    console.log("DATA", this.questionsValue);
    this.loadQuestions();
  }

  findIndex(name: string): number{
    return this.questionsValue.findIndex(obj => obj.name == name);
  }

  changeValue(name: string, value: any){
    let realValue = value.value/100;
    let idx = this.findIndex(name);
    if(idx != -1)
      this.questionsValue[idx].pref = realValue;
    else {
      this.questionsValue.push({
        name: name,
        pref: realValue,
        conf: 1
      })
    }
  }

  loadQuestions(){
    this.questions = [];
    this.presentLoading();
    let i = 0;
    this.recommendationService.downPropagation(this.questionsValue).subscribe(questions=>{
      this.colsQuestions = [];
      let askedNodes = questions.askedNodes;
      askedNodes.forEach(question=>{
        this.selected.push(question.name);
        if(i % this.divider == 0){
          this.questions = [];
          for(let j = i; j < i + this.divider; j++){
            if(askedNodes[j])
              this.questions.push({name: askedNodes[j].name, image: askedNodes[j].image})
          }
          this.colsQuestions.push({cols: this.questions});
        }
        i += 1;
      });
      this.stopLoading();
      if(this.colsQuestions.length == 0){
        this.store.dispatch(this.recommActions.setUpdatedClass(this.questionsValue));
        // this.navigate();
      }
    });
  }

  showAlert() {
    let alert =
     this.alertCtrl.create({
      title: 'Failed',
      message: 'Please at least select one type',
      buttons: ['OK']
    });
    alert.present();
  }

  navigate(){
    
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
