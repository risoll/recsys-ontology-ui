import { RecommendationPage } from './../recommendation/recommendation';
import { Store } from '@ngrx/store';
import { Feedback } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { captureState, isFormFilled } from '../../utils/common.util';
import { AppState } from "../../models/state.model";
import { AlertService } from '../../services/alert.service';
import { LoadingService } from '../../services/loading.service';
import { Storage } from '@ionic/storage';
import { RecommActions } from "../../actions/recomm.actions";
import { Observable } from "rxjs/Observable";
import { Static } from "../../models/recommendation.model";

@IonicPage()
@Component({
  selector: 'page-feedback',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Survei Model {{mode}}</ion-title>
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
      <ion-card>
        <ion-list radio-group [(ngModel)]="profession">
          <ion-list-header>
            Pekerjaan
          </ion-list-header>
          <ion-item *ngFor="let p of professions">
            <ion-label>{{p}}</ion-label>
            <ion-radio [value]="p"></ion-radio>
          </ion-item>
        </ion-list>
      </ion-card>
      <ion-list>
        <ion-item [(ngModel)]="age">
          <ion-label color="primary" stacked>Umur</ion-label>
          <ion-input type="number" placeholder="contoh: 17"></ion-input>
        </ion-item>
        <ion-item [(ngModel)]="city">
          <ion-label color="primary" stacked>Kota Domisili</ion-label>
          <ion-input placeholder="contoh: Bandung"></ion-input>
        </ion-item>
      </ion-list>
      <ion-card *ngFor="let q of questions; let index = index">
        <ion-list radio-group [(ngModel)]="answers[index]">
          <ion-list-header [innerHTML]="q">
          </ion-list-header>
          <ion-item *ngFor="let a of answerTypes">
            <ion-label>{{a.label}}</ion-label>
            <ion-radio [value]="a.value"></ion-radio>
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
  profession: string;
  age: number;
  questions = [
    "Petunjuk (kalimat dalam model ini) yang diberikan mudah dimengerti",
    "Saya mengerti dengan baik semua petunjuk yang diberikan",
    "Saya dapat melihat rincian informasi suatu destinasi wisata dengan mudah",
    "Secara umum saya kesulitan menemukan destinasi wisata yang saya inginkan",
    "Saya dapat menemukan destinasi wisata yang saya inginkan dengan cepat",
    "Saya sangat menyukai destinasi wisata yang saya pilih",
    "Saya ingin mengunjungi destinasi wisata yang saya pilih suatu saat nanti",
    "Saya tidak suka cara berinteraksi model ini",
    "Saya tidak mempunyai kesulitan menggunakan model ini",
    "Saya akan menggunakan model ini kembali jika suatu saat saya ingin berwisata"
  ];

  professions = [
    "Mahasiswa", "Dosen", "Karyawan", "Wiraswasta", "Lainnya"
  ];

  answerTypes = [
    { label: "Setuju", color: "secondary", value: 1 },
    { label: "Tidak Setuju", color: "danger", value: 0 }
  ];

  answers = [];
  univ: string;
  majors: string;
  rating: number;
  ip: string;
  city: string;
  male: boolean = false;
  female: boolean = false;
  mode: number;

  pu1: number;
  eou1: number;
  tr1: number;
  pe1: number;
  bi1: number;

  staticData: Static;

  private likertScales = [
    { label: "Sangat setuju", value: 5 },
    { label: "Setuju", value: 4 },
    { label: "Netral", value: 3 },
    { label: "Tidak setuju", value: 2 },
    { label: "Sangat tidak setuju", value: 1 },
  ];

  constructor(public navCtrl: NavController,
    private userService: UserService,
    private navParams: NavParams,
    public alertService: AlertService,
    public loadingService: LoadingService,
    private store: Store<AppState>,
    public storage: Storage,
    private recommActions: RecommActions) {
    this.mode = captureState(this.store).recomm.mode;
    this.rating = navParams.get("rate");
    this.staticData = captureState(this.store).recomm.staticData;
    if (this.staticData) {
      this.name = this.staticData.name;
      this.age = this.staticData.age;
      this.city = this.staticData.city;
      this.profession = this.staticData.profession;

      if (this.staticData.gender) {
        this.gender = this.staticData.gender;
        // if (this.staticData.gender == "male") {
        //   this.male = true;
        // }
        // else {
        //   this.female = true;
        // }
      }
    }
    console.log("MALE", this.male, "FEMALE", this.female);
  }


  navigate() {
    let date = new Date();
    if (this.answers.length == this.questions.length) {
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
        // rating: this.rating,
        rating: 0,
        eou: this.answers[0],
        eou2: this.answers[1],
        inf: this.answers[2],
        etu: this.answers[3],
        pe: this.answers[4],
        prq: this.answers[5],
        tr: this.answers[6],
        prq2: this.answers[7],
        etu2: this.answers[8],
        tr2: this.answers[9],
        mode: this.mode,
        time: date.getTime()
      };
      console.log("params", params);

      if (isFormFilled(params)) {
        this.loadingService.presentLoading();
        this.userService.addFeedback(params).subscribe(feedback => {
          this.loadingService.stopLoading();
          this.alertService.presentAlert("Terimakasih", `${params.name}, 
        saya sangat berterimakasih karena anda sudah berpartisipasi dalam survey tugas akhir ini`);

          let currentMode = captureState(this.store).recomm.mode;

          let staticData = {
            name: this.name,
            city: this.city,
            gender: this.gender,
            age: this.age,
            profession: this.profession
          };
          this.store.dispatch(this.recommActions.setStatic(staticData));
          this.storage.set("staticData", staticData)

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
    else this.alertService.presentAlert("", "Mohon isi data dengan lengkap terlebih dahulu");
  }
}
