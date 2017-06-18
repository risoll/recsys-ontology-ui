import { RecommendationPage } from './../recommendation/recommendation';
import { ResultSelectionPage } from './../result.selection/result.selection';
import { Question, ColsQuestion } from './../../models/recommendation.model';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";
import { isFormFilled } from "../../utils/common.util";

@Component({
  selector: 'page-begin',
  template: `
    <ion-header>
      <ion-toolbar color="sky">
        <ion-title>Recommender</ion-title>
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
    <ion-footer>
      <ion-grid>
        <ion-row>
          <ion-col col-6>        
            <button ion-button block outline color="fire" (click)=back()>
              <ion-icon name="arrow-back"></ion-icon>
              &nbsp;Previous
            </button> 
          </ion-col>
          <ion-col col-6>
            <button full ion-button color="fire" (click)=next()>
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

  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][];
  private divider = 2;
  private counter = 0;
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
    this.prevSelected = this.navParams.get("selected");
    this.prevColsQuestions = this.navParams.get("loaded");
    console.log("DATA", this.prevSelected, this.prevColsQuestions);
    this.loadQuestions();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      message: 'Please at least select one type',
      buttons: ['OK']
    });
    alert.present();
  }

  selectClass(value: any){
    let idx = this.selected.indexOf(value);
    if(idx > -1) this.selected.splice(idx, 1);
    else this.selected.push(value);
  }

  back(){
    this.direction = "back";
    if(this.lastPage)
      this.removeLastSelection();
    else
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
    // console.log("before", this.prevColsQuestions);
    let idx = this.prevColsQuestions.indexOf(this.colsQuestions);
    if(idx > -1) this.prevColsQuestions.splice(idx, 1);
    // console.log("after", this.prevColsQuestions);
    let length = this.prevColsQuestions.length;
    if(length <= 1) this.navCtrl.setRoot(RecommendationPage);
    this.colsQuestions = this.prevColsQuestions[length - 1];
    // this.selected = [];
  }

  removeLastSelection(){
    this.counter -= 2;
    this.selected = this.prevSelected[this.prevSelected.length - 1];
    if(!this.selected) this.selected = [];
    console.log("on last remove selected", this.selected);
    this.consoleObject("on last remove prevSelected", this.prevSelected);
    // strange behavior, need to remove 2 idx all at once
    // let length = this.prevSelected.length;
    // this.prevSelected.splice(length - 2, length - 1);
    // this.prevSelected.pop();
    this.prevSelected.pop();
    console.log("after last remove prevSelected", this.prevSelected);
  }

  removeCurrentSelection(){
    this.counter -= 1;
    this.selected = this.prevSelected[this.prevSelected.length - 1];
    if(!this.selected) this.selected = [];
    console.log("on remove selected", this.selected);
    this.consoleObject("on remove prevSelected", this.prevSelected);
    // strange behavior, need to remove 2 idx all at once
    this.prevSelected.splice(this.prevSelected.length - 1, 2);
    console.log("after remove prevSelected", this.prevSelected);
  }

  loadQuestions(){
    console.log("on next selected", this.selected);
    let needAlert = true;
    let check = isFormFilled({node: this.selected});
    if(!check){
      if(this.counter == 0)
        needAlert = false;
    }else needAlert = false;
    if(needAlert) this.showAlert();
    else{
      if(this.selected.length > 0)
        this.prevSelected.push(this.selected);
      console.log("on next prevSelected", this.prevSelected);
      this.questions = [];
      this.presentLoading();
      let i = 0;
      this.recommendationService.getBulkChildren(this.prevSelected[this.prevSelected.length - 1]).subscribe(questions=>{
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
        if(this.colsQuestions.length == 0){
          console.log("last prevSelected", this.prevSelected);
          this.lastPage = true;
          let selectedClasses: string[] = [];

          if (this.prevSelected.length > 0)
              this.prevSelected.forEach(element => {
                  selectedClasses = selectedClasses.concat(element);
              });
          this.navigate(ResultSelectionPage, {selectedClass: selectedClasses, loadedClass: this.prevColsQuestions});
          this.colsQuestions = this.prevColsQuestions[this.prevColsQuestions.length - 1];
          this.prevSelected.pop();
        }else{
          this.lastPage = false;
          this.selected = [];
          this.prevColsQuestions.push(this.colsQuestions);
        }
      });
      this.counter += 1;
    }
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
