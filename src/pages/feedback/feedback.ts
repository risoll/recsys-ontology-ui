import { RecommendationPage } from './../recommendation/recommendation';
import { Store } from '@ngrx/store';
import { Feedback } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, NavParams, AlertController } from 'ionic-angular';
import { captureState, isFormFilled } from "../../utils/common.util";
import { AppState } from "../../models/state.model";

@Component({
  selector: 'page-feedback',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Feedback</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
            <ion-list>
                <ion-item [(ngModel)]="name">
                    <ion-label color="primary" stacked>Name</ion-label>
                    <ion-input placeholder="Full name"></ion-input>
                </ion-item>
            </ion-list>
            <ion-card>
                <ion-list radio-group [(ngModel)]="gender">
                    <ion-list-header>
                        Gender
                    </ion-list-header>
                    <ion-item>
                        <ion-label>Male</ion-label>
                        <ion-radio value="male"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label>Female</ion-label>
                        <ion-radio value="female"></ion-radio>
                    </ion-item>
                </ion-list>
            </ion-card>
            <ion-list>
                <ion-item [(ngModel)]="city">
                    <ion-label color="primary" stacked>City</ion-label>
                    <ion-input placeholder="e.g. Bandung"></ion-input>
                </ion-item>
                <ion-item [(ngModel)]="age">
                    <ion-label color="primary" stacked>Age</ion-label>
                    <ion-input type="number" placeholder="e.g. 17"></ion-input>
                </ion-item>
                <ion-item [(ngModel)]="profession">
                    <ion-label color="primary" stacked>Profession</ion-label>
                    <ion-input placeholder="e.g. Software engineer"></ion-input>
                </ion-item>
                <ion-item [(ngModel)]="univ">
                    <ion-label color="primary" stacked>University</ion-label>
                    <ion-input placeholder="e.g. Telkom University"></ion-input>
                </ion-item>
                <ion-item [(ngModel)]="majors">
                    <ion-label color="primary" stacked>Majors</ion-label>
                    <ion-input placeholder="e.g. Computer Science"></ion-input>
                </ion-item>
            </ion-list>
    </ion-content>
    <ion-footer style="height: 10%;">        
        <button style="height: 100%;" ion-button block color="fire" (click)=navigate() >Submit</button> 
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
  public loadingCtrl: LoadingController,
  private navParams: NavParams,
  public alertCtrl: AlertController,
  private store: Store<AppState>) {
      this.rating = navParams.get("rate");
  }

  showAlert(title: string = "Failed", message: string = "Please fill all required field first") {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }

  navigate(){
    this.ip = captureState(this.store).user.ipApi.ip;
    if(!this.ip) this.ip = "-";
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
    if(isFormFilled(params)){
        this.presentLoading();
        this.userService.addFeedback(params).subscribe(feedback=>{
            this.stopLoading();
            this.showAlert("Thank You", `Thank you ${params.name} for participating this survey, have a good day!`);
            this.navCtrl.setRoot(RecommendationPage);
        })
    }
    else this.showAlert();
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
