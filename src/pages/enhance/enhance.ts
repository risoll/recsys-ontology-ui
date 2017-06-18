import { ResultSelectionPage } from './../result.selection/result.selection';
import { Question, ColsQuestion, BacktrackClass } from './../../models/recommendation.model';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';
import {RecommendationService} from "../../services/recommendation.service";
import { captureState, isFormFilled } from "../../utils/common.util";
import { AppState } from "../../models/state.model";

@Component({
  selector: 'page-enhance',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Enchance</ion-title>
      </ion-navbar>
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
export class EnhancePage {

  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][] = [];
  private needInherit: boolean = true;
  private needAlert: boolean = false;
  private divider = 2;
  private counter = 0;
  private direction: string;
  private prevSelected: string[][] = [];
  private selected: string[] = [];
  private minLength: number;
  private selectedIdx: number = 0;
  private lastPage: boolean = false;
  private backtracks: BacktrackClass[];
  loader: Loading;
  consoleObject = (str, obj) => console.log(str, JSON.parse(JSON.stringify(obj)));

  constructor(public navCtrl: NavController,
  private store: Store<AppState>,
  public alertCtrl: AlertController,
  private navParams: NavParams,
  private recommendationService: RecommendationService,
  public loadingCtrl: LoadingController) {
    this.recommendationService.traverseNode(this.navParams.get("recomms")).subscribe(data=>{
        this.backtracks = data;
        console.log("DATA", this.backtracks);
        this.findMinLength();
        for(let i = this.minLength - 1; i >= 0; i--){
          if(this.needInherit){
            this.loadBacktrack(i);
            // this.next();
            this.selectedIdx = i;
          }
        };
        console.log("selectedIdx", this.selectedIdx)
    })
  }

  // checkDuplicate(target: string, exists: string[]): boolean{
  //   let duplicated = false;
  //   for(let i = 0; i < exists.length; i++){
  //     if(exists)
  //   }
  //   return duplicated;
  // }

  findMinLength(){
    this.minLength = this.backtracks[0].parents.length;
    this.backtracks.forEach(backtrack=>{
      if(this.minLength > backtrack.parents.length)
        this.minLength = backtrack.parents.length
    })
  }

  loadBacktrack(idx: number){
    this.needInherit = false;
    let i: number = 0;
    let existQuestions: string[] = [];
    this.questions = [];
    this.colsQuestions = [];
    this.backtracks.forEach(backtrack=>{
      if(i % this.divider == 0){
        this.questions = [];
        for(let j = i; j < i + this.divider; j++){
          if(this.backtracks[j]){
            let name = this.backtracks[j].parents[idx].child;
            let image = this.backtracks[j].parents[idx].image
            let question = <Question>{
              name: name,
              image: image
            }
            if(existQuestions.indexOf(name) == -1)
              this.questions.push(question);
            existQuestions.push(name);
          }
        }
        this.colsQuestions.push({cols: this.questions})
      }
      i += 1;
    })
    if(this.colsQuestions.length < 2 && this.colsQuestions[0].cols.length < 2)
      this.needInherit = true;
    this.counter += 1;
    console.log(this.colsQuestions)
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
    // let idx = this.selected.indexOf(value);
    // if(idx > -1) this.selected.splice(idx, 1);
    // else this.selected.push(value);
    if(this.selected.length > 0){
      this.selected.pop()
      this.selected.push(value)
    }
    else this.selected.push(value)
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
    let check = isFormFilled({node: this.selected});
    console.log("cek", check, this.selected);
    if(!check){
        this.needAlert = true;
    }else this.needAlert = false;
    if(this.needAlert) this.showAlert();
    else{
      let places = captureState(this.store).recomm.selectedPlaces;
      // let newPlaces: Place[] = [];
      console.log("PLACE BEFORE", places);
      let name = "";
      let child = "";
      this.backtracks.forEach(backtrack=>{
        child = backtrack.parents[this.selectedIdx].child;
        name = backtrack.name;
        if(child == this.selected[0])
          places = places.filter(place=>{
            console.log("compare name", place.name, name)
            return place.name == name;
          })
      })
      console.log("PLACE AFTER", places);
      // this.store.dispatch(this.recommActions.selectPlaces(places));
      this.navCtrl.push(ResultSelectionPage, {selectedPlaces: places})
      // this.loadBacktrack(this.selectedIdx);
    }
    console.log("counter", this.counter);
  }

  loadPrevQuestions(){
    // console.log("before", this.prevColsQuestions);
    let idx = this.prevColsQuestions.indexOf(this.colsQuestions);
    if(idx > -1) this.prevColsQuestions.splice(idx, 1);
    // console.log("after", this.prevColsQuestions);
    let length = this.prevColsQuestions.length;
    if(length <= 1) this.navCtrl.pop();
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



  // navigate(page: any, params: any = {}){
  //   // this.app.getRootNav().push(page, params, {animate: true, direction: 'forward'});
  //   this.navCtrl.push(page, params);
  // }
  //
  // stopLoading(){
  //   this.loader.dismiss();
  // }
  //
  // presentLoading() {
  //   this.loader = this.loadingCtrl.create({
  //     content: "Please wait..."
  //   });
  //   this.loader.present();
  // }
}
