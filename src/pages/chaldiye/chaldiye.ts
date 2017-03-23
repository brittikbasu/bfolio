import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chaldiye page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chaldiye',
  templateUrl: 'chaldiye.html'
})
export class ChaldiyePage {
win: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaldiyePage');
  }
  newTab(url) {
  this.win = window.open(url, '_blank');
  this.win.focus();
}

}
