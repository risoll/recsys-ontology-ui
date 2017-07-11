import { DetailsPage } from './details';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [DetailsPage],
  imports: [IonicPageModule.forChild(DetailsPage)],
  entryComponents: [DetailsPage],
  exports:[
      DetailsPage
  ]
})
export class DetailsPageModule { }