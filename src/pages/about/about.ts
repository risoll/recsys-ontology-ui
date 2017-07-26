import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  template: `
    <ion-header>
      <ion-navbar color="sky">
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>
          Tentang
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <h6>{{p1}}</h6>
      <p>{{p2}}</p>
      <!--
      <p>For further discussion you can contact me at <a href="mailto:rizky.solechudin@gmail.com?Subject=Hello" target="_top">rizky.solechudin@gmail.com</a></p>
      -->
      <p>Untuk diskusi lebih lanjut anda dapat menghubungi saya via email di <a href="mailto:rizky.solechudin@gmail.com?Subject=Hello" target="_top">rizky.solechudin@gmail.com</a></p>
      <p style="font-size: small; position: fixed; bottom: 0;">
        Seluruh gambar yang tampil pada aplikasi ini disediakan oleh <a href="http://freepik.com">Freepik</a>, <a href="http://unsplash.com">Unsplash</a> dan Google Place Photo API.
      </p>
    </ion-content>
  `
})
export class AboutPage {

  // p1: string = "Ontology Based Recommendation for Tourist Attraction using Semantic Reasoning (A Case Study of Tourism in Bandung)";
  // p2: string = "This is a final project for pursuing bachelor degree at Computer Science majors Telkom University.";

  p1: string = "Rekomendasi Tempat Wisata Berbasis Ontology Menggunakan Semantic Reasoning (Studi Kasus Pariwisata di Bandung)";
  p2: string = "Aplikasi ini merupakan implementasi dari Tugas Akhir saya untuk menyelesaikan studi di Telkom University.";

  constructor(public navCtrl: NavController) {

  }

}
