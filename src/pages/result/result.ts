import { AttractionsActions } from './../../actions/attractions.actions';
import { AppState } from './../../models/state.model';
import { Store } from '@ngrx/store';
import { Place } from './../../models/place.model';
import { PlacePage } from './../place/place';
import { ExplanationPage } from './../explanation/explanation';
import { FeedbackPage } from './../feedback/feedback';
import { TabsPage } from './../tabs/tabs';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

import { NavController, LoadingController, Loading, AlertController, ModalController, App, NavParams } from 'ionic-angular';
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
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Result</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-card>
        <img [src]="recomm.photo"/>
        <ion-card-content>
            <ion-card-title>
                {{recomm.name}}
            </ion-card-title>
            <p>{{recomm.formatted_address}}</p>
            <hr>
            <ion-row no-padding>
                <ion-col text-center>
                    <button (click)=explain() ion-button clear small color="danger" icon-left>
                    <ion-icon name='help'></ion-icon>
                    Why this
                    </button>
                </ion-col>
                <ion-col text-right>
                    <button (click)=details(recomm) ion-button clear small color="danger" icon-left>
                    <ion-icon name='navigate'></ion-icon>
                    Details
                    </button>
                </ion-col>
            </ion-row>
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
    <ion-footer style="height: 10%;">        
        <button style="height: 100%;" ion-button block (click)=navigate() >Next</button> 
    </ion-footer>

  `
})
export class ResultPage {

  loader: Loading;
  rate: number;
  comment: string;
  explanation: string = "This is an explanation page";
  place: string = "Place";
  private recomm: Place;

  constructor(public navCtrl: NavController, 
    private userService: UserService,
    private store: Store<AppState>,
    private navParams: NavParams,
    private attractionsActions: AttractionsActions,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private app: App) {
      this.recomm = this.navParams.get("recomm");
  }

  details(place: Place){
    this.store.dispatch(this.attractionsActions.selectPlace(place));
    this.app.getRootNav().push(PlacePage);
  }

  explain(){
    let modal = this.modalCtrl.create(ExplanationPage, {
        explanation: this.explanation
    });
    modal.present();
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
      message: 'Please rate the recommendation first',
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
