import { GOOGLE_API_KEY } from './../../utils/constants';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsPage } from './maps';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [MapsPage],
  imports: [
    IonicPageModule.forChild(MapsPage),
  
    AgmCoreModule.forRoot({
        apiKey: GOOGLE_API_KEY
    })
    ],
  entryComponents: [MapsPage],
  exports: [
      MapsPage
  ]
})
export class MapsPageModule { }