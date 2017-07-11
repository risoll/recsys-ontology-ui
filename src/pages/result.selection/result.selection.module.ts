import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultSelectionPage } from './result.selection';

@NgModule({
  declarations: [ResultSelectionPage],
  imports: [IonicPageModule.forChild(ResultSelectionPage)],
  entryComponents: [ResultSelectionPage]
})
export class ResultSelectionPageModule { }