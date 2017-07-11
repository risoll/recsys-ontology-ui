import { ExplanationPage } from './explanation';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ExplanationPage],
  imports: [IonicPageModule.forChild(ExplanationPage)],
  entryComponents: [ExplanationPage]
})
export class ExplanationPageModule { }