import { Component } from '@angular/core';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  template: `
    <ion-header>
        <ion-navbar color="sky">
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
