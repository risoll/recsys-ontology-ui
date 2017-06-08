import { TabsPage } from './../tabs/tabs';
import { RecommActions } from './../../actions/recomm.actions';
import { Question, ColsQuestion } from './../../models/recommendation.model';
import { Store } from '@ngrx/store';
import { IpApi } from './../../models/user.model';
import { ResultPage } from './../result/result';
import { FeedbackPage } from './../feedback/feedback';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, App, AlertController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import {RecommendationService} from "../../services/recommendation.service";
import { UserActions } from "../../actions/user.actions";
import { UserService } from "../../services/user.service";
import { captureState, appendState, isFormFilled } from "../../utils/common.util";
import { AppState } from "../../models/state.model";

@Component({
  selector: 'page-begin',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>For You</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">
      <ion-grid>
        <ion-row *ngFor="let cols of colsQuestions">
          <ion-col col-6 *ngFor="let col of cols.cols">
            <ion-card
              [ngClass]="{'selected': selected.indexOf(col.name) > -1}"
              (click)=selectClass(col.name)>
              <img [src]="col.image">
              <div class="card-title">{{col.name}}</div>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer style="height: 10%;">
      <ion-grid>
        <ion-row>
          <ion-col col-6>        
            <button full ion-button color="light" (click)=back()>
              <ion-icon name="arrow-back"></ion-icon>
              &nbsp;Previous
            </button> 
          </ion-col>
          <ion-col col-6>
            <button full ion-button color="primary" (click)=next()>
              Next&nbsp;
              <ion-icon name="arrow-forward"></ion-icon>
            </button> 
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>

  `
})
export class BeginPage {

  private ipApi$: Observable<IpApi>;
  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][];
  private divider = 2;
  private counter = 0;
  private direction: string;
  private prevSelected: string[][];
  private selected: string[] = [];
  loader: Loading;

  constructor(public navCtrl: NavController, 
  private store: Store<AppState>, 
  private recommActions: RecommActions,
  private userService: UserService,
  public alertCtrl: AlertController,
  private app: App,
  private navParams: NavParams,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {
    this.prevSelected = this.navParams.get("selected");
    this.prevColsQuestions = this.navParams.get("loaded");
    this.loadQuestions();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      subTitle: 'Please at least select one type',
      buttons: ['OK']
    });
    alert.present();
  }

  selectClass(value: any){
    let idx = this.selected.indexOf(value);
    if(idx > -1) this.selected.splice(idx, 1);
    else this.selected.push(value);
    // let mergedClass = appendState(this.prevSelected, this.selected);
    // this.store.dispatch(this.recommActions.selectClass(mergedClass));
      
  }

  back(){
    this.direction = "back";
    this.counter -= 1;
    this.removeCurrentSelection();
    this.loadPrevQuestions();
    console.log("counter", this.counter);
  }

  next(){
    this.direction = "next";
    this.loadQuestions(); 
    console.log("counter", this.counter);
  }

  loadPrevQuestions(){
    // this.prevColsQuestions = captureState(this.store).recomm.loadedClass;
    
    console.log("before", this.prevColsQuestions);
    let idx = this.prevColsQuestions.indexOf(this.colsQuestions);
    if(idx > -1) this.prevColsQuestions.splice(idx, 1);
    console.log("after", this.prevColsQuestions);
    let length = this.prevColsQuestions.length;
    if(length <= 1) this.navigate(TabsPage);
    this.colsQuestions = this.prevColsQuestions[length - 1];
    this.selected = [];
    // this.store.dispatch(this.recommActions.loadClass(this.prevColsQuestions));
  }

  removeCurrentSelection(){
    // this.prevSelected = captureState(this.store).recomm.selectedClass;
    console.log("before selected", this.selected, this.prevSelected)
    // strange behavior, need to remove 2 idx all at once
    this.prevSelected.splice(this.prevSelected.length - 1, 2);
    console.log("after selected", this.prevSelected);
    // this.store.dispatch(this.recommActions.selectClass(this.prevSelected));
  }

  loadQuestions(){
    if(this.selected.length > 0)
      this.prevSelected.push(this.selected);
    console.log("selected", this.selected);
    let needAlert = true;
    let check = isFormFilled({node: this.selected});
    console.log("check", check);
    console.log("counter", this.counter);
    if(!check){
      if(this.counter == 0)
        needAlert = false;
    }else needAlert = false;
    if(needAlert) this.showAlert();
    else{
      console.log("merged", this.prevSelected);
      this.questions = [];
      this.presentLoading();
      let i = 0;
      this.recommendationService.getBulkChildren(this.prevSelected[this.counter]).subscribe(questions=>{
        this.colsQuestions = [];
        questions.forEach(question=>{
          if(i % this.divider == 0){ 
            this.questions = [];
            for(let j = i; j < i + this.divider; j++){
              if(questions[j])
                this.questions.push({name: questions[j], image: this.createImage(questions[j])})
            }
            this.colsQuestions.push({cols: this.questions})
          }
          i += 1;
        });
        this.stopLoading();          
        // this.prevColsQuestions = captureState(this.store).recomm.loadedClass;
        if(this.colsQuestions.length == 0){
          this.navigate(ResultPage, {selectedClass: this.prevSelected, loadedClass: this.prevColsQuestions});
          console.log("last", this.prevColsQuestions);
          this.colsQuestions = this.prevColsQuestions[this.prevColsQuestions.length - 1];
        }else{
          this.prevColsQuestions.push(this.colsQuestions);
          // this.store.dispatch(this.recommActions.loadClass(appendState(this.prevColsQuestions, this.colsQuestions)));
        }
      });
      this.selected = [];
      this.counter += 1;
    }
  }

  createImage(question: string){
    let image = question.replace(" ", "").toLowerCase();
    let url = `assets/images/class/${image}.png`
    url = `assets/images/class/default.png`
    return url
  }

  navigate(page: any, params: any = {}){
    this.app.getRootNav().push(page, params, {animate: true, direction: 'forward'});
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
