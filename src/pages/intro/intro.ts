import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-intro',
  template: `
    <ion-content padding>
        <ion-slides pager>
            <ion-slide *ngFor="let slide of slides">
                <img style="width: 60%" [src]="slide.image" class="slide-image"/>
                <h2 class="slide-title" [innerHTML]="slide.title"></h2>
                <p [innerHTML]="slide.description"></p>
            </ion-slide>
            <ion-slide>
                <img style="width: 60%" src="assets/images/4.png" class="slide-image"/>
                <h2 class="slide-title">Are you ready?</h2>
                <button (click)=goToHome() ion-button large clear icon-right color="primary">
                    Continue
                    <ion-icon name="arrow-forward"></ion-icon>
                </button>
            </ion-slide>
        </ion-slides>
    </ion-content>
  `
})
export class IntroPage {
 slides = [
    {
      title: "Hello there",
      description: "My name is <b>Rizky Solechudin</b>, a (2013) Computer Science student at Telkom University.",
      image: "assets/images/1.png",
    },
    {
      title: "Welcome to the Recommender System for Bandung's Tourist Attraction!",
      description: "This recommender system is made for <b>My Final Project</b>, for pursuing the Bachelor Degree.",
      image: "assets/images/2.png",
    },
    {
      title: "Will you help me?",
      description: "You can help me by filling <b>a Survey</b>, by using this app, keep going on the \"Guide Me\" tab and you are good to go.",
      image: "assets/images/3.png",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goToHome(){
      this.navCtrl.setRoot(TabsPage);
  }

}
