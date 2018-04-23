import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TalkPage} from '../talk/talk';
/**
 * Generated class for the TalklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talklist',
  templateUrl: 'talklist.html',
})
export class TalklistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TalklistPage');
  }
  
  openTalk(){
    this.navCtrl.push(TalkPage);
  }
}
