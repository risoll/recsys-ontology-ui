import { RecommendationPage } from './../recommendation/recommendation';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
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
                <img src="assets/images/intro/4.jpg" class="slide-image"/>
                <h2 class="slide-title">Anda siap?</h2>
                <button (click)=goToHome() ion-button large clear icon-end color="primary">
                    Lanjut
                    <ion-icon name="arrow-forward"></ion-icon>
                </button>
            </ion-slide>
        </ion-slides>
    </ion-content>
  `
})
export class IntroPage {
 slides = [
    // {
    //   title: "Hello there",
    //   description: "My name is <b>Rizky Solechudin</b>, a (2013) Computer Science student at Telkom University.",
    //   image: "assets/images/intro/1.jpg",
    // },
    // {
    //   title: "Welcome to the Recommender System for Bandung's Tourist Attraction!",
    //   description: "This recommender system is made for <b>My Final Project</b>, for pursuing the Bachelor Degree.",
    //   image: "assets/images/intro/2.jpg",
    // },
    // {
    //   title: "Will you help me?",
    //   description: "You can help me by filling <b>a Survey</b>, by using this app, keep going on the <b>Recommender Page</b>, and you are good to go.",
    //   image: "assets/images/intro/3.jpg",
    // }


    {
      title: "Halo",
      description: "Perkenalkan, saya <b>Rizky Solechudin</b>, mahasiswa S1 Teknik Informatika Telkom University tahun angkatan 2013",
      image: "assets/images/intro/1.jpg",
    },
    {
      title: "Selamat datang!",
      description: "Aplikasi ini merupakan Sistem Rekomendasi Tempat Wisata yang ada di Bandung Raya, sistem ini dibuat sebagai implementasi dari <b>Tugas Akhir</b> yang saya kerjakan.",
      image: "assets/images/intro/2.jpg",
    },
    {
      title: "Bantu saya",
      description: "Anda dapat membantu saya dalam pengerjaan Tugas Akhir ini dengan menggunakan aplikasi ini, terimakasih!",
      image: "assets/images/intro/3.jpg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  goToHome(){
      this.navCtrl.setRoot(RecommendationPage);
  }

}
