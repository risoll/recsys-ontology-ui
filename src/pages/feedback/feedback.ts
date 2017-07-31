import {RecommendationPage} from './../recommendation/recommendation';
import {Store} from '@ngrx/store';
import {Feedback} from './../../models/user.model';
import {UserService} from './../../services/user.service';
import {Component} from '@angular/core';

import {NavController, LoadingController, Loading, NavParams, AlertController, IonicPage} from 'ionic-angular';
import {captureState, isFormFilled} from "../../utils/common.util";
import {AppState} from "../../models/state.model";
import {AlertService} from '../../services/alert.service';
import {LoadingService} from '../../services/loading.service';
import {Storage} from '@ionic/storage';
import {RecommActions} from "../../actions/recomm.actions";

@IonicPage()
@Component({
  selector: 'page-feedback',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Survei Pengguna</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item [(ngModel)]="name">
          <ion-label color="primary" stacked>Nama</ion-label>
          <ion-input placeholder="Nama Lengkap"></ion-input>
        </ion-item>
      </ion-list>
      <ion-card>
        <ion-list radio-group [(ngModel)]="gender">
          <ion-list-header>
            Jenis Kelamin
          </ion-list-header>
          <ion-item>
            <ion-label>Laki-laki</ion-label>
            <ion-radio value="male"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Perempuan</ion-label>
            <ion-radio value="female"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-list>
        <ion-item [(ngModel)]="city">
          <ion-label color="primary" stacked>Kota Domisili</ion-label>
          <ion-input placeholder="contoh: Bandung"></ion-input>
        </ion-item>
        <ion-item [(ngModel)]="age">
          <ion-label color="primary" stacked>Umur</ion-label>
          <ion-input type="number" placeholder="contoh: 17"></ion-input>
        </ion-item>
      </ion-list>
      <ion-card>
        <ion-list radio-group [(ngModel)]="pu1">
          <ion-list-header>
            Aplikasi ini berguna untuk mencari <br> 
            tempat wisata
          </ion-list-header>
          <ion-item *ngFor="let scale of likertScales">
            <ion-label>{{scale.label}}</ion-label>
            <ion-radio [value]="scale.value"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-card>
        <ion-list radio-group [(ngModel)]="eou1">
          <ion-list-header>
            Aplikasi ini mudah digunakan
          </ion-list-header>
          <ion-item *ngFor="let scale of likertScales">
            <ion-label>{{scale.label}}</ion-label>
            <ion-radio [value]="scale.value"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-card>
        <ion-list radio-group [(ngModel)]="tr1">
          <ion-list-header>
            Aplikasi ini menghasilkan rekomendasi <br> 
            yang dapat dipercaya
          </ion-list-header>
          <ion-item *ngFor="let scale of likertScales">
            <ion-label>{{scale.label}}</ion-label>
            <ion-radio [value]="scale.value"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-card>
        <ion-list radio-group [(ngModel)]="pe1">
          <ion-list-header>
            Saya merasa nyaman saat <br> 
            menggunakan aplikasi ini
          </ion-list-header>
          <ion-item *ngFor="let scale of likertScales">
            <ion-label>{{scale.label}}</ion-label>
            <ion-radio [value]="scale.value"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-card>
        <ion-list radio-group [(ngModel)]="bi1">
          <ion-list-header>
            Saya akan menggunakan kembali <br> 
            aplikasi ini di masa yang akan datang
          </ion-list-header>
          <ion-item *ngFor="let scale of likertScales">
            <ion-label>{{scale.label}}</ion-label>
            <ion-radio [value]="scale.value"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
    <ion-footer style="height: 10%;">
      <button style="height: 100%;" ion-button block color="fire" (click)="navigate()">Submit</button>
    </ion-footer>

  `
})
export class FeedbackPage {

  loader: Loading;
  name: string;
  gender: string;
  age: number;
  profession: string;
  univ: string;
  majors: string;
  rating: number;
  ip: string;
  city: string;

  pu1: number;
  eou1: number;
  tr1: number;
  pe1: number;
  bi1: number;

  private likertScales = [
    {label: "Sangat setuju", value: 5},
    {label: "Setuju", value: 4},
    {label: "Netral", value: 3},
    {label: "Tidak setuju", value: 2},
    {label: "Sangat tidak setuju", value: 1},
  ];

  constructor(public navCtrl: NavController,
              private userService: UserService,
              private navParams: NavParams,
              public alertService: AlertService,
              public loadingService: LoadingService,
              private store: Store<AppState>,
              public storage: Storage,
              private recommActions: RecommActions) {
    this.rating = navParams.get("rate");
  }


  navigate() {
    this.ip = captureState(this.store).user.ipApi.ip;
    if (!this.ip) this.ip = "-";
    let params = <Feedback>{
      id: 0,
      user_agent: navigator.userAgent,
      platform: navigator.platform,
      ip: this.ip,
      city: this.city,
      name: this.name,
      gender: this.gender,
      age: Number(this.age),
      rating: this.rating,
      // rating: 0,
      pu1: this.pu1,
      eou1: this.eou1,
      tr1: this.tr1,
      pe1: this.pe1,
      bi1: this.bi1,

    };
    console.log("params", params);
    if (isFormFilled(params)) {
      this.loadingService.presentLoading();
      this.userService.addFeedback(params).subscribe(feedback => {
        this.loadingService.stopLoading();
        this.alertService.presentAlert("Terimakasih", `${params.name}, 
        saya sangat berterimakasih karena anda sudah berpartisipasi dalam survey tugas akhir ini`);

        let currentMode = captureState(this.store).recomm.mode;

        this.storage.set(`mode${currentMode}Status`, 'completed');
        if (currentMode == 1)
          this.store.dispatch(this.recommActions.setMode1Status("completed"))
        else
          this.store.dispatch(this.recommActions.setMode2Status("completed"))
        this.navCtrl.setRoot('MethodSelectionPage');
      })
    }
    else this.alertService.presentAlert("", "Mohon isi data dengan lengkap terlebih dahulu");
  }
}
