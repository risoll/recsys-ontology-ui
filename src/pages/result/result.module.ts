import { ResultPage } from './result';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [ResultPage],
  imports: [IonicPageModule.forChild(ResultPage), Ionic2RatingModule],
  entryComponents: [ResultPage]
})
export class ResultPageModule { }