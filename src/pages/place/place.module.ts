import { DetailsPageModule } from './../details/details.module';
import { MapsPageModule } from './../maps/maps.module';
import { GOOGLE_API_KEY } from './../../utils/constants';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapsPage } from './../maps/maps';
import { DetailsPage } from './../details/details';
import { PlacePage } from './place';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
      PlacePage
    ],
  imports: [
        IonicPageModule.forChild(PlacePage),
        MapsPageModule,
        DetailsPageModule
    ],
  entryComponents: [
      PlacePage
    ]
})
export class PlacePageModule { }