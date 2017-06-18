import { RecommendationPage } from './../pages/recommendation/recommendation';
import { AttractionsPage } from './../pages/attractions/attractions';
import { IntroPage } from './../pages/intro/intro';
import { UserActions } from './../actions/user.actions';
import { UserService } from './../services/user.service';
import { AboutPage } from './../pages/about/about';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Loading } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { Store } from "@ngrx/store";
import { AppState } from "../models/state.model";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RecommendationPage;
  loader: Loading;

  pages: Array<{title: string, component: any}>;
  constructor(private store: Store<AppState>,
  private userActions: UserActions,
  private userService: UserService,
  public platform: Platform,
  public loadingCtrl: LoadingController,
  public storage: Storage) {
    this.presentLoading();
    this.userService.ipApi().subscribe(ipApi=>{
      this.store.dispatch(this.userActions.setIpApi(ipApi));
    });
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Recommender', component: RecommendationPage },
      { title: 'Browse', component: AttractionsPage },
      { title: 'About', component: AboutPage }
      // { title: 'Advanced', component: AdvancedPage },
      // { title: 'Settings', component: SettingsPage },
      // { title: 'Account', component: AccountPage }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

   presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('introShown').then((result) => {

        if(result){
          this.rootPage = RecommendationPage;
        } else {
          this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }

        this.loader.dismiss();

      });
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
