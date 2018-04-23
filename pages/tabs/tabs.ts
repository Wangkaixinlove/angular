import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import{ LoginPage} from'../login/login';
import{ MyPage} from'../my/my';
import{ TalkPage} from'../talk/talk';
import{ TalklistPage} from'../talklist/talklist';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root=TalklistPage;
  tab5Root=MyPage;
  constructor() {

  }
}
