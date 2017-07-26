import { LoadingService } from './../../services/loading.service';
import { RecommendationPage } from './../recommendation/recommendation';
import { ResultSelectionPage } from './../result.selection/result.selection';
import { Question, ColsQuestion, NodeValues, UpPropagationParams } from './../../models/recommendation.model';
import { Component, ErrorHandler } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, NavParams, IonicPage } from 'ionic-angular';
import { RecommendationService } from "../../services/recommendation.service";
import { isFormFilled, filterZero, captureState } from '../../utils/common.util';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/state.model';
import { RecommActions } from '../../actions/recomm.actions';
import { AlertService } from '../../services/alert.service';

@IonicPage()
@Component({
  selector: 'page-begin',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <ion-title>Rekomendasi</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">
      <h6 ion-text style="font-size: small;" color="ocean" class="highlight">
        Perbarui tingkat prioritas anda <br> pada kategori dibawah ini
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
      </ion-grid>   
    </ion-content> 
    <ion-footer style="height: 10%;">        
      <button color="fire" style="height: 100%;" ion-button block (click)="navigate()">
        <p>Lanjut</p>
      </button> 
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
  private totalValue = 0;
  private old: NodeValues[] = [];
  private assigned: NodeValues[] = [];

  private direction: string;
  private prevSelected: string[][];
  private selected: string[] = [];
  private lastPage: boolean = false;
  private names: string[] = [];
  loader: Loading;
  consoleObject = (str, obj) => console.log(str, JSON.parse(JSON.stringify(obj)));

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    private recommActions: RecommActions,
    public alertService: AlertService,
    private navParams: NavParams,
    private recommendationService: RecommendationService,
    private loadingService: LoadingService) {
    this.questionsValue = this.navParams.get("selected");
    this.prevSelected = this.navParams.get("names");
    console.log("DATA", this.navParams.get("loaded"));
    this.loadQuestions();
  }

  next() { }
  back() { }

  findIndex(name: string): number {
    return this.questionsValue.findIndex(obj => obj.name == name);
  }

  changeValue(name: string, value: any) {
    let realValue = value.value / 100;
    let idx = this.findIndex(name);
    if (idx != -1)
      this.questionsValue[idx].pref = realValue;
    else {
      this.questionsValue.push({
        name: name,
        pref: realValue,
        conf: 1
      })
    };
  }

  loadQuestions() {
    this.questions = [];
    this.loadingService.presentLoading();
    let i = 0;
    this.recommendationService.downPropagation(this.questionsValue).subscribe(questions => {
      this.questionsValue = [];
      this.colsQuestions = [];
      this.old = questions.data;
      let askedNodes = questions.askedNodes;
      askedNodes.forEach(question => {
        this.selected.push(question.name);
        if (i % this.divider == 0) {
          this.questions = [];
          for (let j = i; j < i + this.divider; j++) {
            if (askedNodes[j])
              this.questions.push({ 
                name: askedNodes[j].name, 
                image: askedNodes[j].image,
                description: askedNodes[j].description,
                root: askedNodes[j].root
            })
          }
          this.colsQuestions.push({ cols: this.questions });
        }
        i += 1;
      });
      this.loadingService.stopLoading();
      if (this.colsQuestions.length == 0) {
        this.store.dispatch(this.recommActions.setUpdatedClass(this.questionsValue));
        // this.navigate();
      }
    });
  }


  filterZero(questionsValue: NodeValues[]): NodeValues[] {
    return questionsValue.filter(q => q.pref > 0);
  }

  sendData(params: UpPropagationParams){
    console.log("SEND DATA", params);
    this.navCtrl.push('ResultSelectionPage', {
      params: params
    })
  }

  navigate() {
    let passed = false;
    let questionsValue: NodeValues[] = filterZero(this.questionsValue, "pref");
    let value = 0;
    let yes = false;
    questionsValue.forEach(node => {
      value += node.pref
    });
    passed = true;
    let names = questionsValue.map(q => q.name);
    let location = captureState(this.store).user.location;
    let distance = captureState(this.store).recomm.distance;
    let params = <UpPropagationParams>{
      old: this.old,
      assigned: questionsValue,
      userLocation: location,
      distance: distance
    };
    console.log("UP", params);
    if (value <= 0) {
      this.alertService.presentAlertWithCallback(
        "", "Anda yakin tidak memperbarui preferensi anda?", "Tidak Yakin", "Yakin")
        .then(status => {
          if(status){
            this.sendData(params);
          }
        })
    }
    else {
      this.sendData(params);
    }

  }
}
