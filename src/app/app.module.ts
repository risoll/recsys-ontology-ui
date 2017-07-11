import { MapsPage } from './../pages/maps/maps';
import { GOOGLE_API_KEY } from './../utils/constants';
import { APP_PAGES } from './app.pages';
import { APP_REDUCERS } from './app.reducers';
import { APP_ACTIONS } from './app.actions';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {APP_SERVICES} from "./app.services";
import {JsonpModule} from "@angular/http";
import { Ionic2RatingModule } from 'ionic2-rating';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from "@ngrx/store";
import { IonicStorageModule } from '@ionic/storage';
import { PlacePageModule } from '../pages/place/place.module';
import { PlacePage } from '../pages/place/place';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(APP_REDUCERS),
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, APP_SERVICES, APP_ACTIONS]
})
export class AppModule {}
