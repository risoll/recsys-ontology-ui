import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AttractionsPage } from '../pages/attractions/attractions';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import {APP_SERVICES} from "./app.services";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AttractionsPage,
    TabsPage,
    SettingsPage,
    AccountPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AttractionsPage,
    TabsPage,
    AccountPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, APP_SERVICES]
})
export class AppModule {}
