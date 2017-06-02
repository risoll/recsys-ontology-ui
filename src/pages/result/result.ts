import { FeedbackPage } from './../feedback/feedback';
import { TabsPage } from './../tabs/tabs';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";
import {RecommendationService} from "../../services/recommendation.service";
import { isFormFilled } from "../../utils/common.util";

@Component({
  selector: 'page-result',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Result</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-card>
        <img src="https://lh3.googleusercontent.com/p/AF1QipPrmp6TboGNpQy-PJ9aNiTjZfpwfSxFWNDACFCS=s1600-w200-h200"/>
        <ion-card-content>
            <ion-card-title>
                Kolam Renang Oniba
            </ion-card-title>
            <p>
                Jl. Raya Majalaya - Cicalengka, Cikuya, Cicalengka, Bandung, Jawa Barat 40395, Indonesia
            </p>
        </ion-card-content>
    </ion-card>
        <ion-card style="text-align: center">
            <ion-card-header>
                How was the recommendation?
            </ion-card-header>
            <ion-card-content>
                <rating [(ngModel)]="rate" 
                        readOnly="false"
                        max="5" 
                        emptyStarIconName="star-outline" 
                        halfStarIconName="star-half"
                        starIconName="star"
                        nullable="false"
                        (ngModelChange)="onModelChange($event)">
                </rating>
                {{comment}}
            </ion-card-content>
        </ion-card>
    </ion-content>
    <ion-footer>        
        <button style="heigth: 200%;" ion-button block (click)=navigate() >Next</button> 
    </ion-footer>

  `
})
export class ResultPage {

  loader: Loading;
  rate: number;
  comment: string;

  constructor(public navCtrl: NavController, 
    private userService: UserService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
      
  }

  onModelChange(value: any){
      this.starToText(value);
  }

  starToText(value: number){
    if(value == 1) this.comment = "Sorry :(";
    else if(value == 2) this.comment = "I am not sure";
    else if(value == 3) this.comment = "Not bad";
    else if(value == 4) this.comment = "I think it's great";
    else this.comment = "Awesome!";
  }

  navigate(){
    let check = isFormFilled({rate: this.rate})
    if(check)
        this.navCtrl.push(FeedbackPage, {
            rate: this.rate
        })
    else this.showAlert(); 
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Failed',
      subTitle: 'Please rate the recommendation first',
      buttons: ['OK']
    });
    alert.present();
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
