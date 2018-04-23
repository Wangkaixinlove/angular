import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabuPage} from '../fabu/fabu';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openFabu(){
    this.navCtrl.push(FabuPage);
  }
}
