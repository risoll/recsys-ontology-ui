import { Schedule } from './../../models/place.model';
import { Store } from '@ngrx/store';
import {Component} from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { Place } from "../../models/place.model";
import { captureState } from "../../utils/common.util";
import { AppState } from "../../models/state.model";

@IonicPage()
@Component({
  selector: 'page-details',
  template: `
    <img style="width: 100%" [src]="place.photo"/>
    <ion-card-content>
        <ion-card-title>
            {{place.name}}
        </ion-card-title>
        
        <h6 ion-text color="primary" style="font-size: small">Deskripsi</h6>
        <p>{{place.description}}</p>
      
        <h6 ion-text color="primary" style="font-size: small">Alamat</h6>
        <p>{{place.formatted_address}}</p>
      
        <h6 ion-text color="primary" style="font-size: small">Telepon</h6>
        <p>{{place.phone}}</p>
        
        <hr>
        
        <h6 ion-text color="primary">Jam Buka dan Jam Tutup</h6>
        <table>
            <tr *ngFor="let schedule of schedules">
                <td>{{schedule.name}}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>{{schedule.schedule}}</td>
            </tr>
        </table>

        
    </ion-card-content>
    
  `
})
export class DetailsPage {
  place: Place;
  schedules: Schedule[];

  constructor(
      private store: Store<AppState>,
      public navCtrl: NavController) {
        this.place = captureState(this.store).attractions.selectedPlace;
        this.schedules = [
            // {name: "Monday", schedule: this.place.monday},
            // {name: "Tuesday", schedule: this.place.tuesday},
            // {name: "Wednesday", schedule: this.place.wednesday},
            // {name: "Thursday", schedule: this.place.thursday},
            // {name: "Friday", schedule: this.place.friday},
            // {name: "Saturday", schedule: this.place.saturday},
            // {name: "Sunday", schedule: this.place.sunday},

            {name: "Senin", schedule: this.place.monday},
            {name: "Selasa", schedule: this.place.tuesday},
            {name: "Rabu", schedule: this.place.wednesday},
            {name: "Kamis", schedule: this.place.thursday},
            {name: "Jumat", schedule: this.place.friday},
            {name: "Sabtu", schedule: this.place.saturday},
            {name: "Minggu", schedule: this.place.sunday},
        ]
    }

}
