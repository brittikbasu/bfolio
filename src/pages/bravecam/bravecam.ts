import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BravecamPage');
  }

  newTab(url) {
  this.win = window.open(url, '_blank');
  this.win.focus();
}

}
