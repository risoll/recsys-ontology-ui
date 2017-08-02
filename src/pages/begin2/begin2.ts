import {Component} from '@angular/core';

import {NavController, IonicPage, Loading, NavParams} from 'ionic-angular';
import {ColsQuestion, NodeValues, UpPropagationParams} from "../../models/recommendation.model";
import {Question} from "../../models/recommendation.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../models/state.model";
import {RecommActions} from "../../actions/recomm.actions";
import {AlertService} from "../../services/alert.service";
import {RecommendationService} from "../../services/recommendation.service";
import {LoadingService} from "../../services/loading.service";
import {captureState} from "../../utils/common.util";
import {Place} from "../../models/place.model";

@IonicPage()
@Component({
  selector: 'page-begin2',
  template: `
    <ion-header>
      <ion-toolbar color="sky">
        <ion-title>
          Model Interaksi 2
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content *ngIf="questions" class="card-background-page">

      <div *ngIf="prevPlaces[counter].length == 0 && colsQuestions.length == 0" style="text-align: center; padding: 10px">
        <p>Tidak ditemukan rekomendasi dalam preferensi anda, ingin mengulangi proses rekomendasi dari awal?</p>
        <button (click)="reset()" color="fire" ion-button icon-left>
          <ion-icon name="refresh"></ion-icon>
          Ulangi Proses Rekomendasi
        </button>
      </div>
      <div *ngIf="prevPlaces[counter].length > 0">
        <h6 ion-text style="font-size: small;" color="ocean" class="highlight">
          <b>{{prevPlaces[counter].length}}</b> Rekomendasi tempat wisata ditemukan
        </h6>
        <div style="margin: 0 auto; display: flex; justify-content: center;">
          <button ion-button color="fire" (click)="showPlaces()">
            Tampilkan
          </button>
        </div>
        <br>
        <div class="strike" *ngIf="colsQuestions.length > 0">
          <span><i>Atau</i></span>
        </div>
      </div>
      <div *ngIf="colsQuestions.length > 0">
        <h6 *ngIf="prevPlaces[counter].length > 0" ion-text style="font-size: small;" color="ocean" class="highlight">
          Jika hasil rekomendasi masih belum sesuai, <br> 
          perbarui lagi tingkat prioritas anda <br> 
          pada kategori dibawah ini
        </h6>
        <h6 *ngIf="prevPlaces[counter].length == 0" ion-text style="font-size: small;" color="ocean" class="highlight">
          Perbarui lagi tingkat prioritas anda <br> 
          pada kategori dibawah ini
        </h6>
        <ion-grid>
          <ion-row *ngFor="let cols of colsQuestions">
            <ion-col col-6 *ngFor="let col of cols.cols">
              <ion-card>
                <img style="width: 100%;" [src]="col.image">
                <div class="card-title">{{col.name}}</div>
                <div class="card-subtitle"
                     *ngIf="findIndex(col.name) != -1 && questionsValue[findIndex(col.name)].pref > 0">
                  {{questionsValue[findIndex(col.name)].pref * 100}}
                </div>
                <ion-range
                  step="10"
                  style="top: 15% !important"
                  class="card-title"
                  (ionChange)="changeValue(col.name, $event)"
                  color="danger"
                  pin="true">
                </ion-range>
                <button style="font-size: smaller"
                        (click)="col.showDesc = !col.showDesc"
                        ion-button clear small
                        color="fire" icon-start>
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
      </div>
    </ion-content>
    <ion-footer style="height: 10%;">
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <button ion-button block outline color="fire" (click)="back()">
              <ion-icon name="arrow-back"></ion-icon>
              &nbsp;Sebelumnya
            </button>
          </ion-col>
          <ion-col col-6>
            <button *ngIf="colsQuestions.length > 0" full ion-button color="fire" (click)="next()">
              Lanjut&nbsp;
              <ion-icon name="arrow-forward"></ion-icon>
            </button>
            <button *ngIf="colsQuestions.length <= 0" disabled full ion-button color="fire" (click)="next()">
              Lanjut&nbsp;
              <ion-icon name="arrow-forward"></ion-icon>
            </button>
            <!--<button full ion-button color="fire" (click)="next()">-->
              <!--Lanjut&nbsp;-->
              <!--<ion-icon name="arrow-forward"></ion-icon>-->
            <!--</button>-->
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  `
})
export class Begin2Page {

  private questions: Question[] = [];
  private colsQuestions: ColsQuestion[] = [];
  private prevColsQuestions: ColsQuestion[][] = [];
  private divider = 2;
  private counter = 0;
  private questionsValue: NodeValues[] = [];
  private totalValue = 0;
  private old: NodeValues[] = [];
  private olds: NodeValues[][] = [[]];
  private assigned: NodeValues[] = [];

  private direction: string;
  private prevSelected: string[][];
  private selected: string[] = [];
  private lastPage: boolean = false;
  private names: string[] = [];
  private places: Place[] = [];
  private prevPlaces: Place[][] = [[]];
  loader: Loading;
  consoleObject = (str, obj) => console.log(str, JSON.parse(JSON.stringify(obj)));

  constructor(public navCtrl: NavController,
              private store: Store<AppState>,
              private recommActions: RecommActions,
              public alertService: AlertService,
              private navParams: NavParams,
              private recommendationService: RecommendationService,
              private loadingService: LoadingService) {
    this.questionsValue = this.navParams.get("selected");
    this.prevSelected = this.navParams.get("names");
    this.counter = 0;

    console.log("COUNTER", this.counter, "DATA", this.navParams.get("loaded"));
    this.loadQuestions();
  }


  reset() {
    this.navCtrl.setRoot('MethodSelectionPage');
  }

  showPlaces() {
    this.sendData();
  }

  next() {
    this.navigate();
  }

  back() {
    this.questionsValue = [];
    console.log("prevPlace1", this.prevPlaces[this.counter]);
    if(this.counter > 0){
      this.counter -= 1;
      this.prevColsQuestions.pop();
      this.prevPlaces.pop();
      this.olds.pop();
      console.log("back counter", this.counter);
      console.log("prevPlace", this.prevPlaces[this.counter].length);
      this.colsQuestions = this.prevColsQuestions[this.counter];
    }
    else{
      console.log("BACK TO ROOT");
      this.prevPlaces = [[]];
      this.colsQuestions = [];
      this.olds = [[]];
      this.navCtrl.pop();
    }
  }

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
    }
  }

  loadQuestions() {
    this.questions = [];
    this.loadingService.presentLoading();
    let i = 0;
    this.recommendationService.downPropagationV2(this.questionsValue).subscribe(questions => {
      this.questionsValue = [];
      this.colsQuestions = [];
      this.old = questions.data;
      this.olds[this.counter] = questions.data;
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
          this.colsQuestions.push({cols: this.questions});
        }
        i += 1;
      });
      this.prevPlaces[this.counter] = [];
      this.prevColsQuestions.push(this.colsQuestions);
      this.loadingService.stopLoading();
      if (this.colsQuestions.length == 0) {
        this.store.dispatch(this.recommActions.setUpdatedClass(this.questionsValue));
        // this.navigate();
      }
    });
  }

  loadUpwardQuestions() {
    this.questions = [];
    this.loadingService.presentLoading();
    let i = 0;
    let location = captureState(this.store).user.location;
    let distance = captureState(this.store).recomm.distance;
    let questionsValue: NodeValues[] = this.filterZero(this.questionsValue);
    let params = <UpPropagationParams>{
      // old: this.old,
      old: this.olds[this.counter - 1],
      assigned: questionsValue,
      userLocation: location,
      distance: distance
    };
    this.recommendationService.upPropagationV2(params).subscribe(questions => {
      this.prevPlaces[this.counter] = [];
      this.questionsValue = [];
      this.colsQuestions = [];
      this.old = questions.old;
      this.olds[this.counter] = questions.old;
      this.prevPlaces[this.counter] = questions.places;
      console.log("prevPlaces on next", this.prevPlaces[this.counter], this.prevPlaces.length);
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
          this.colsQuestions.push({cols: this.questions});
        }
        i += 1;
      });

      this.prevColsQuestions.push(this.colsQuestions);
      this.loadingService.stopLoading();
      console.log("colsQuestions", this.colsQuestions.length);
      if (this.colsQuestions.length == 0) {
        this.store.dispatch(this.recommActions.setUpdatedClass(this.questionsValue));
        // this.showPlaces();
      }else{
      }
    });
  }


  filterZero(questionsValue: NodeValues[]): NodeValues[] {
    return questionsValue.filter(q => q.pref > 0);
  }

  sendData() {
    console.log("SEND DATA", this.prevPlaces[this.counter]);
    this.navCtrl.push('ResultSelectionPage', {
      places: this.prevPlaces[this.counter]
    })
  }

  navigate() {
    let passed = false;
    let questionsValue: NodeValues[] = this.filterZero(this.questionsValue);
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
    console.log("VALUE", value);
    if (value <= 0) {
      if(this.prevPlaces[this.counter].length > 0){
        this.alertService.presentAlertWithCallback(
          "", "Anda yakin tidak memperbarui preferensi anda? Hasil rekomendasi akan langsung ditampilkan.", "Tidak Yakin", "Yakin")
          .then(status => {
            if (status) {
              this.sendData();
            }
          })
      }
      else{
        this.alertService.presentAlert("", "Harap set prioritas minimal pada satu kategori terlebih dahulu untuk mendapatkan rekomendasi.")
      }
    }
    else {
      this.counter += 1;
      console.log("next counter", this.counter);
      console.log("next before", this.prevPlaces[this.counter]);
      this.prevPlaces[this.counter] = [];
      this.olds[this.counter] = [];
      console.log("next after", this.prevPlaces[this.counter]);
      this.loadUpwardQuestions();
    }


  }
}
