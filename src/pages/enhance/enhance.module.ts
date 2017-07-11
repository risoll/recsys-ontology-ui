import { EnhancePage } from './enhance';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [EnhancePage],
  imports: [IonicPageModule.forChild(EnhancePage)],
  entryComponents: [EnhancePage]
})
export class EnhancePageModule { }