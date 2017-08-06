import { Component } from '@angular/core';
import { LoadingController, Loading, ViewController, NavParams, Platform, IonicPage } from 'ionic-angular';
import {Location} from "../../models/google.model";
import {captureState} from "../../utils/common.util";
import {Store} from "@ngrx/store";
import {AppState} from "../../models/state.model";

@IonicPage()
@Component({
  selector: 'page-explanation',
  template: `
    <ion-header>
        <ion-toolbar color="sky">
            <ion-title>
            Penjelasan
            </ion-title>
            <ion-buttons start>
            <button ion-button (click)="dismiss()">
                <span ion-text color="light" showWhen="ios">Tutup</span>
                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
            </button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
      <p style="padding: 10px">
        Sistem akan mendeteksi secara otomatis lokasi anda sekarang. Jika anda tidak sedang berada
        di sekitar Bandung, maka sistem akan menganggap lokasi anda adalah
        di pusat kota Bandung. Sehingga sistem akan tetap bisa memberikan rekomendasi.
      </p>
      <p style="text-align: center">Titik Pusat Bandung</p>
      <sebm-google-map [zoom]="zoom" [latitude]="defaultLocation.lat" [longitude]="defaultLocation.lng">
        <sebm-google-map-marker [latitude]="defaultLocation.lat" [longitude]="defaultLocation.lng"></sebm-google-map-marker>
      </sebm-google-map>
    </ion-content>
  `,

  styles: [`
    .sebm-google-map-container {
      height: 500px;
      width: 100%;
    }
  `]
})
export class ExplanationPage {
  loader: Loading;
  explanation: string;
  defaultLocation: Location;
  zoom = 12;

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private store: Store<AppState>
  ) {
      this.explanation = params.get("explanation");
      this.defaultLocation = captureState(this.store).user.defaultLocation;
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
