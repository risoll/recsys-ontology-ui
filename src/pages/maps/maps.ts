import { AppState } from './../../services/app-state';
import { Store} from '@ngrx/store';
import { Place } from './../../models/place.model';
import { Observable } from 'rxjs/Observable';
import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { captureState } from "../../utils/common.util";

@Component({
  selector: 'page-maps',
  template: `
    <sebm-google-map [latitude]="place.lat" [longitude]="place.lng">
        <sebm-google-map-marker [latitude]="place.lat" [longitude]="place.lng"></sebm-google-map-marker>
    </sebm-google-map>
  `,
  styles: [`
    .sebm-google-map-container {
        height: 800px;
        width: 100%;
    }
  `]
})
export class MapsPage {
  place: Place;

  constructor(
      private store: Store<AppState>,
      public navCtrl: NavController) {
      this.place = captureState(this.store).attractions.selectedPlace;
  }

}
