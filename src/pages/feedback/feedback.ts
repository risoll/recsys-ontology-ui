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
        <ion-item [(ngModel)]="profession">
          <ion-label color="primary" stacked>Profesi</ion-label>
          <ion-input placeholder="contoh: Mahasiswa"></ion-input>
        </ion-item>
        <ion-item [(ngModel)]="univ">
          <ion-label color="primary" stacked>Universitas</ion-label>
          <ion-input placeholder="contoh: Telkom University"></ion-input>
        </ion-item>
        <ion-item [(ngModel)]="majors">
          <ion-label color="primary" stacked>Fakultas</ion-label>
          <ion-input placeholder="contoh: Teknik Informatika"></ion-input>
        </ion-item>
      </ion-list>
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
      profession: this.profession,
      univ: this.univ,
      majors: this.majors,
      rating: this.rating
    };
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
