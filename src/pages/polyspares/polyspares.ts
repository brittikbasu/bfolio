import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Polyspares page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-polyspares',
  templateUrl: 'polyspares.html'
})
export class PolysparesPage {
win :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolysparesPage');
  }

    newTab(url) {
  this.win = window.open(url, '_blank');
  this.win.focus();
}

}
