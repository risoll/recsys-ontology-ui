import { UserService } from './../services/user.service';
import { UserActions } from './../actions/user.actions';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { Store } from "@ngrx/store";
import { AppState } from "../models/state.model";
import {RecommActions} from "../actions/recomm.actions";

@Component({
  template: `
    <ion-menu [content]="content">
      <ion-header>
        <ion-toolbar color="sky">
          <ion-title>Jalan-Jalan</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Disable swipe-to-go-back because it's poor UX to combine STGB with side menus -->
    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
  `
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'IntroPage';
  loader: Loading;

  pages: Array<{ title: string, component: any }>;
  constructor(private store: Store<AppState>,
    private userActions: UserActions,
    private userService: UserService,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private splashScreen: SplashScreen,
    private recommActions: RecommActions,
    private statusBar: StatusBar) {
    // this.presentLoading();
    this.userService.ipApi().subscribe(ipApi => {
      this.store.dispatch(this.userActions.setIpApi(ipApi));
    });
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Rekomendasi', component: 'MethodSelectionPage' },
      { title: 'Jelajah', component: 'AttractionsPage' },
      { title: 'Tentang', component: 'AboutPage' }
      // { title: 'Advanced', component: AdvancedPage },
      // { title: 'Settings', component: SettingsPage },
      // { title: 'Account', component: AccountPage }
    ];

  }

  resetStatus(){
    let mode1Status = this.storage.get('mode1Status');
    let mode2Status = this.storage.get('mode2Status');
    let comparisonStatus = this.storage.get("comparisonStatus");
    let staticData = this.storage.get("staticData");
    if(staticData){
      staticData.then(data=>{
        // console.log("static data", data);
        this.store.dispatch(this.recommActions.setStatic(data));
      })
    }
    if(mode1Status){
      mode1Status.then(status=>{
        // console.log("1 Status", status);
        if(status == "completed"){
          this.store.dispatch(this.recommActions.setMode1Status("completed"));
        }
      })
    }
    if(comparisonStatus){
      comparisonStatus.then(status=>{
        // console.log("comparison status", status);
        if(status == "completed"){
          this.store.dispatch(this.recommActions.setComparisonStatus("completed"));
        }
      })
    }
    if(mode2Status){
      mode2Status.then(status=>{
        // console.log("2 Status", status);
        if(status == "completed"){
          this.store.dispatch(this.recommActions.setMode2Status("completed"));
        }
      })
    }
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

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log("POSITION", position.coords);
        this.store.dispatch(this.userActions.setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }))
      }),
      error=>{
        // console.log("ERROR");
      },
      {
          maximumAge:0,
          timeout:5000
      }
    }else{
      // console.log("FAILED");
    }

    this.resetStatus();

  }

  colorLog(message: string, color: string = "") {

    color = color || "black";

    switch (color) {
      case "success":
        color = "Green";
        break;
      case "info":
        color = "DodgerBlue";
        break;
      case "error":
        color = "Red";
        break;
      case "warning":
        color = "Orange";
        break;
      default:
        color = color;
    }

    console.log("%c" + message, "color:" + color);
  }

  showLog(){
    console.clear();
    this.colorLog("Hi, I'm Rizky Solechudin", "success");
    this.colorLog("Currently working at Braincode Solution");
    this.colorLog("as Scala and Angular Developer", "warning");
    this.colorLog("For business inquiries you can contact me at");
    this.colorLog("rizky.solechudin@gmail.com", "info");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('introShown').then((result) => {
        if (result) {
          this.rootPage = 'MethodSelectionPage';
          // this.rootPage = 'PostFeedbackPage';
          // this.rootPage = 'FeedbackPage';
        } else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showLog();
    });
  }
}
