import {ExplanationPage} from './explanation';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MapsPageModule} from "../maps/maps.module";
import {AgmCoreModule} from "angular2-google-maps/core";
import {GOOGLE_API_KEY} from "../../utils/constants";

@NgModule({
  declarations: [ExplanationPage],
  imports: [IonicPageModule.forChild(ExplanationPage),
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY
    })],
  entryComponents: [ExplanationPage]
})
export class ExplanationPageModule {
}
