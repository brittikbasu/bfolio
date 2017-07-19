import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/*
  Generated class for the Bravecam page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bravecam',
  templateUrl: 'bravecam.html'
})
export class BravecamPage {
win: any;
de: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.subscribe('language:changed', deutsch => {
      console.log("german iis " +deutsch);
  this.de = deutsch;
  console.log("ger" +deutsch);
    console.log("germmm" +this.de);

});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BravecamPage');

  }

  newTab(url) {
  this.win = window.open(url, '_blank');
  this.win.focus();
}

}
