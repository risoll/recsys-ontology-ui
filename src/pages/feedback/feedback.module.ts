import { FeedbackPage } from './feedback';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [FeedbackPage],
  imports: [IonicPageModule.forChild(FeedbackPage)],
  entryComponents: [FeedbackPage]
})
export class FeedbackPageModule { }