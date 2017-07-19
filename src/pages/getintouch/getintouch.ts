import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the GetintouchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-getintouch',
  templateUrl: 'getintouch.html',
})
export class GetintouchPage {
    contactPage = ContactPage;
    deutsch: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.subscribe('language:changed', deutsch =>{
      this.deutsch = deutsch;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetintouchPage');

  }

  switchTabs(tabno) {
  this.navCtrl.parent.select(tabno);
}

}
