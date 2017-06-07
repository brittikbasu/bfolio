import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BravecamPage } from '../bravecam/bravecam';

import { ChaldiyePage } from '../chaldiye/chaldiye';

import { PolysparesPage } from '../polyspares/polyspares';

import { PolizeigewaltPage } from '../polizeigewalt/polizeigewalt';

/*
  Generated class for the Work page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-work',
  templateUrl: 'work.html'
})
export class WorkPage {
bravecamPage = BravecamPage;
    chaldiyePage = ChaldiyePage;
    polysparesPage = PolysparesPage;
    polizeigewaltPage = PolizeigewaltPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }

}
