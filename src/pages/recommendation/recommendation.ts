import { RecommActions } from './../../actions/recomm.actions';
import { Question, ColsQuestion, NodeValues } from './../../models/recommendation.model';
import { Store } from '@ngrx/store';
import { Component, AfterViewInit } from '@angular/core';

import {NavController, LoadingController, Loading, AlertController, IonicPage, NavParams} from 'ionic-angular';
import { RecommendationService } from "../../services/recommendation.service";

import { BeginPage } from "../begin/begin";
import { filterZero, findIndex, isFormFilled, captureState } from '../../utils/common.util';
import { AppState } from "../../models/state.model";
import { AlertService } from '../../services/alert.service';
import { LoadingService } from "../../services/loading.service";

@IonicPage()
@Component({
  selector: 'page-recommendation',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Rekomendasi Mode {{mode}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">
      <h6 ion-text style="font-size: small;" color="ocean" class="highlight">
        Tentukan tingkat prioritas anda pada<br>
        kategori tempat wisata dibawah ini dengan skala 1-100
      </h6>
      <ion-grid>
        <ion-row *ngFor="let cols of colsQuestions">
          <ion-col col-6 *ngFor="let col of cols.cols">
            <ion-card>
              <img style="width: 100%;" [src]="col.image">
              <div class="card-title">{{col.name}}</div>
              <div class="card-subtitle" *ngIf="findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0">{{questionsValue[findIndex(col.name)].pref * 100}}</div>
              <ion-range 
                step="10" 
                style="top: 15% !important" 
                class="card-title" 
                (ionChange)="changeValue(col.name, $event)" 
                color="danger" 
                pin="true">
              </ion-range>
              <button style="font-size: smaller" (click)="col.showDesc = !col.showDesc" ion-button clear small color="fire" icon-start>
                <ion-icon *ngIf="!col.showDesc" name='arrow-dropdown'></ion-icon>
                <ion-icon *ngIf="col.showDesc" name='arrow-dropup'></ion-icon>
                Deskripsi
              </button>
            </ion-card>
            <ion-card *ngIf="col.showDesc">
              <p style="padding: 10px; font-size: smaller;">
                {{col.description}}
              </p>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12>
            <ion-item>
              <p style="text-align: center">Jarak maksimal anda dengan tempat wisata <br> {{distance}} Km</p>
            </ion-item>
            <ion-item>
              <ion-range step="5" min="5" [(ngModel)]="distance">
                <ion-icon range-left name="people"></ion-icon>
                <ion-icon range-right name="flag"></ion-icon>
              </ion-range>
            </ion-item>
            <!--<ion-item>-->
              <!--<p style="text-align: center">{{distance}} Km</p>-->
            <!--</ion-item>-->
          </ion-col>
        </ion-row>
      </ion-grid>   
    </ion-content> 
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">Lanjut</button> 
    </ion-footer>

  `
})
export class RecommendationPage {
  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private questionsValue: NodeValues[] = [];
  private distance: number = 35;
  private mode: number = 1;

  private divider = 2;
  selected: string[] = [];

  constructor(public navCtrl: NavController,
    private store: Store<AppState>,
    private recommActions: RecommActions,
    private navParams: NavParams,
    private recommendationService: RecommendationService,
    private alertService: AlertService,
    private loadingService: LoadingService) {
    this.mode = this.navParams.get("mode");
    console.log("MODE", this.mode);
    this.loadQuestions("tempat wisata");
  }

  findIndex(name: string): number {
    return this.questionsValue.findIndex(obj => obj.name == name);
  }


  changeValue(name: string, value: any) {
    let realValue = value.value / 100;
    let idx = findIndex(this.questionsValue, "name", name);
    if (idx != -1)
      this.questionsValue[idx].pref = realValue;
    else {
      this.questionsValue.push({
        name: name,
        pref: realValue,
        conf: 1
      })
    }
  }

  loadQuestions(node: string) {
    this.questions = [];
    this.loadingService.presentLoading();
    let i = 0;
    this.recommendationService.getChildren(node).subscribe(questions => {
      this.colsQuestions = [];
      questions.forEach(question => {
        this.selected.push(question.name);
        if (i % this.divider == 0) {
          this.questions = [];
          for (let j = i; j < i + this.divider; j++) {
            if (questions[j])
              this.questions.push({
                name: questions[j].name, image: questions[j].image,
                description: questions[j].description, root: questions[j].root,
                showDesc: false
              })
          }
          this.colsQuestions.push({ cols: this.questions })
        }
        i += 1;
      });
      this.loadingService.stopLoading();
      if (this.colsQuestions.length == 0) {
        this.store.dispatch(this.recommActions.selectRootClass(this.selected));
        this.navigate();
      }
    });
  }

  navigate() {
    let passed = false;
    let questionsValue: NodeValues[] = filterZero(this.questionsValue, "pref");
    if (isFormFilled({ selected: questionsValue })) {
      let value = 0;
      questionsValue.forEach(node => {
        value += node.pref
      });
      if (value > 0) {
        passed = true;
        let names = questionsValue.map(q => q.name);
        this.store.dispatch(this.recommActions.setDistance(this.distance));
        let page = '';
        if(this.mode == 1) page = 'BeginPage';
        else page = 'Begin2Page';
        this.navCtrl.push(page, {
          selected: questionsValue,
          names: [names],
          loaded: this.colsQuestions
        })
      }
    }
    if (!passed) this.alertService.presentAlert("", "Harap tentukan tingkat prioritas minimal pada satu kategori");
  }
}
