import { PostFeedbackPage } from './post.feedback';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [PostFeedbackPage],
  imports: [IonicPageModule.forChild(PostFeedbackPage)],
  entryComponents: [PostFeedbackPage]
})
export class PostFeedbackPageModule { }