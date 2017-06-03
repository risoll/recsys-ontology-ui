import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>
          About
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h6 ion-text color="primary"> 
        Ontology-based Recommender System for tourist attraction in Bandung using semantic reasoning
      </h6>
      <p>
        This is a final project for pursuing bachelor degree Telkom University.
      </p>
    </ion-content>
  `
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
