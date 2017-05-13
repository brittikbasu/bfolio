import { Component, ViewChild} from '@angular/core';

import { NavController, Content, AlertController, Slides } from 'ionic-angular';

import { BravecamPage } from '../bravecam/bravecam';

import { ChaldiyePage } from '../chaldiye/chaldiye';

import { PolysparesPage } from '../polyspares/polyspares';

import { PolizeigewaltPage } from '../polizeigewalt/polizeigewalt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  queries: {
    content: new ViewChild('content')
  }
})
export class HomePage {
  //  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
    bravecamPage = BravecamPage;
    chaldiyePage = ChaldiyePage;
    polysparesPage = PolysparesPage;
    polizeigewaltPage = PolizeigewaltPage;
   // myAlert: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

onScroll(){
  //alert("scrolled");
}
  ionViewDidLoad() {
/*
let alert = this.alertCtrl.create({
      title: 'Hi There Awesome Person!',
      subTitle: 'My website is a work in progress and will be ready by the end of this month (March, 2017). Dont let this stop you from checking it out now :)',
      buttons: ['OK COOL!']
    });
    alert.present();
*/
    
  }


}

