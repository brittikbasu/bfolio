import {
  Component,
  ViewChild
} from '@angular/core';
import {
  NavController,
  NavParams,
  Events
} from 'ionic-angular';
import {
  TabsPage
} from '../tabs/tabs'

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tabsPage = TabsPage;
  deutsch: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

    events.subscribe('language:changed', (deutsch) => {
      console.log("german is " + deutsch);
      this.deutsch = deutsch;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');

  }

}
