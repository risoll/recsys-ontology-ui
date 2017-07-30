import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MethodSelectionPage} from "./method.selection";

@NgModule({
  declarations: [MethodSelectionPage],
  imports: [IonicPageModule.forChild(MethodSelectionPage)],
  entryComponents: [MethodSelectionPage]
})
export class MethodSelectionPageModule { }
