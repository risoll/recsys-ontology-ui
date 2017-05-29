import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {PhotosParam, RadarSearchParam, RadarSearchResponse} from "../../models/google.model";
import {GoogleService} from "../../services/google.service";
import {GOOGLE_API_KEY} from "../../utils/constants";

@Component({
  selector: 'page-home',
  templateUrl: 'attractions.html',
  styles: [`
    page-home .card-background-page ion-card {
      position: relative;
      text-align: center; }

    page-home .card-background-page .card-title {
      position: absolute;
      top: 36%;
      font-size: 2.0em;
      width: 100%;
      font-weight: bold;
      color: #fff; }

    page-home .card-background-page .card-subtitle {
      font-size: 1.0em;
      position: absolute;
      top: 52%;
      width: 100%;
      color: #fff; }

  `]
})
export class AttractionsPage {

  radarSearchParam: RadarSearchParam = {
    location: "-6.917464,107.619123",
    radius: "5000",
    type: "points_of_interest",
    key: GOOGLE_API_KEY
  };
  radarSearchResponse$: Observable<RadarSearchResponse>;

  constructor(public navCtrl: NavController, private googleService: GoogleService) {
    this.radarSearchResponse$ = this.googleService.radarSearch(this.radarSearchParam);
  }

  getPhotos(reference: string){
    let param: PhotosParam = {
      maxwidth:"400",
      photoreference: reference,
      key: GOOGLE_API_KEY
    };
    return this.googleService.photoReference(param);
  }

}
