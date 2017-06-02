import { ResultPage } from './../pages/result/result';
import { FeedbackPage } from './../pages/feedback/feedback';
import { APP_REDUCERS } from './app.reducers';
import { APP_ACTIONS } from './app.actions';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AttractionsPage } from '../pages/attractions/attractions';
import { TabsPage } from '../pages/tabs/tabs';
import { AdvancedPage } from '../pages/advanced/advanced';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import {APP_SERVICES} from "./app.services";
import {JsonpModule} from "@angular/http";
import { Ionic2RatingModule } from 'ionic2-rating';

import {RecommendationPage} from "../pages/recommendation/recommendation";
import { StoreModule } from "@ngrx/store";
import { AttractionsReducer } from "../reducers/attractions.reducer";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AttractionsPage,
    TabsPage,
    RecommendationPage,
    ResultPage,
    FeedbackPage,
    AdvancedPage,
    SettingsPage,
    AccountPage
  ],
  imports: [
    StoreModule.provideStore(APP_REDUCERS),
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    RecommendationPage,
    ResultPage,
    FeedbackPage,
    AttractionsPage,
    TabsPage,
    AccountPage,
    AdvancedPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, APP_SERVICES, APP_ACTIONS]
})
export class AppModule {}
