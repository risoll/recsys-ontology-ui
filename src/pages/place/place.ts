import { Place } from './../../models/place.model';
import { NavParams } from 'ionic-angular';
import { DetailsPage } from './../details/details';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../services/app-state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AttractionsPage } from '../attractions/attractions';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {PageTab} from "../../models/common.model";
import {RecommendationPage} from "../recommendation/recommendation";
import { UserActions } from "../../actions/user.actions";
import { UserService } from "../../services/user.service";
import { IpApi } from "../../models/user.model";

@Component({
  template: `
    <ion-header>
        <ion-navbar>
          <button ion-button menuToggle>
            <ion-icon name="menu"></ion-icon>
          </button>
          <ion-title>Place</ion-title>
        </ion-navbar>
        <ion-toolbar no-border-top>
          <ion-segment [(ngModel)]="type">
            <ion-segment-button value="details">
              Details
            </ion-segment-button>
            <ion-segment-button value="maps">
              Maps
            </ion-segment-button>
          </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div [ngSwitch]="type">
        <page-details *ngSwitchCase="'details'"></page-details>
        <page-maps *ngSwitchCase="'maps'"></page-maps>
      </div>
    </ion-content>

  `
})
export class PlacePage {
  type: string = "details";
  constructor() {
  }
}
