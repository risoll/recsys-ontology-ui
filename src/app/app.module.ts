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

import { StoreModule } from "@ngrx/store";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: APP_PAGES,
  imports: [
    StoreModule.provideStore(APP_REDUCERS),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY
    }),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: APP_PAGES,
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, APP_SERVICES, APP_ACTIONS]
})
export class AppModule {}
