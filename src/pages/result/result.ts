import {AttractionsActions} from './../../actions/attractions.actions';
import {AppState} from './../../models/state.model';
import {Store} from '@ngrx/store';
import {Place} from './../../models/place.model';
import {PlacePage} from './../place/place';
import {ExplanationPage} from './../explanation/explanation';
import {FeedbackPage} from './../feedback/feedback';
import {Component} from '@angular/core';

import {
  NavController,
  LoadingController,
  Loading,
  AlertController,
  ModalController,
  App,
  NavParams,
  IonicPage
} from 'ionic-angular';
import {isFormFilled} from "../../utils/common.util";
import {AlertService} from "../../services/alert.service";

@IonicPage()
@Component({
  selector: 'page-result',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>Rekomendasi Terpilih</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <ion-card style="text-align: center">
        <ion-card-header>
          Berikan penilaian anda terhadap <br>
          rekomendasi yang dihasilkan
        </ion-card-header>
        <ion-card-content>
          {{comment}}
          <rating [(ngModel)]="rate"
                  readOnly="false"
                  max="5"
                  emptyStarIconName="star-outline"
                  halfStarIconName="star-half"
                  starIconName="star"
                  nullable="false"
                  (ngModelChange)="onModelChange($event)">
          </rating>
        </ion-card-content>
      </ion-card>
      <hr>
      <div class="pins">
        <ion-card (click)="details(recomm)" class="pin" *ngFor="let recomm of recomms">
          <img [src]="recomm.photo"/>
          <div *ngIf="recomm.description" class="post-description">
            <small>{{ recomm.description }}</small>
          </div>
          <ion-item>
            <small>{{recomm.name}}</small>
            <p>
              <small>{{recomm.formatted_address}}</small>
            </p>
          </ion-item>
        </ion-card>
      </div>
    </ion-content>
    <ion-footer style="height: 10%;">
    <button style="height: 100%;" color="fire" ion-button block (click)="navigate()">Lanjut</button>
    </ion-footer>

  `
})
export class ResultPage {

  loader: Loading;
  rate: number;
  comment: string;
  explanation: string = "This is an explanation page";
  place: string = "Place";
  private recomms: Place[];

  constructor(public navCtrl: NavController,
              private store: Store<AppState>,
              private navParams: NavParams,
              private attractionsActions: AttractionsActions,
              public alertService: AlertService,
              public modalCtrl: ModalController,
              private app: App) {
    this.recomms = this.navParams.get("recomms");
  }

  details(place: Place) {
    this.store.dispatch(this.attractionsActions.selectPlace(place));
    this.app.getRootNav().push(PlacePage);
  }

  explain() {
    let modal = this.modalCtrl.create(ExplanationPage, {
      explanation: this.explanation
    });
    modal.present();
  }

  onModelChange(value: any) {
    this.starToText(value);
  }

  starToText(value: number) {
    if (value == 1) this.comment = "Sangat Buruk";
    else if (value == 2) this.comment = "Buruk";
    else if (value == 3) this.comment = "Cukup";
    else if (value == 4) this.comment = "Baik";
    else this.comment = "Sangat Baik";
  }

  navigate() {
    let check = isFormFilled({rate: this.rate});
    if (check)
      this.navCtrl.push(FeedbackPage, {
        rate: this.rate
      });
    else this.alertService.presentAlert("", "Harap beri penilaian terhadap hasil rekomendasi terlebih dahulu");
  }


}
