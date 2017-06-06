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
      <h6> 
        Ontology Based Recommendation for Tourist Attraction using Semantic Reasoning (A Case Study of Tourism in Bandung)
      </h6>
      <p>
        This is a final project for pursuing bachelor degree at Computer Science majors Telkom University.
      </p>
      <p>
        For further discussion you can contact me at <a href="mailto:rizky.solechudin@gmail.com?Subject=Hello" target="_top">rizky.solechudin@gmail.com</a>
      </p>
      <p style="font-size: smaller; position: fixed; bottom: 0;">
        All images shown here are provided by <a href="http://freepik.com">Freepik</a>, <a href="http://unsplash.com">Unsplash</a> and Google Place Photo API.
      </p>
    </ion-content>
  `
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
