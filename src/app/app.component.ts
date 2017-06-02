import { IpApi } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../services/app-state';
import { UserActions } from './../actions/user.actions';
import { UserService } from './../services/user.service';
import { AboutPage } from './../pages/about/about';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { AdvancedPage } from '../pages/advanced/advanced';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { Store } from "@ngrx/store";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;
  constructor(private store: Store<AppState>, 
  private userActions: UserActions, 
  private userService: UserService, 
  public platform: Platform) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Homepage', component: TabsPage },
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

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
