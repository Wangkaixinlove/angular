import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesMyPage } from './pages-my';

@NgModule({
  declarations: [
    PagesMyPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesMyPage),
  ],
})
export class PagesMyPageModule {}
