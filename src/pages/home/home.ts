import { Component, ViewChild } from '@angular/core';

import { NavController, Content } from 'ionic-angular';

import { BravecamPage } from '../bravecam/bravecam';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  queries: {
    content: new ViewChild('content')
  }
})
export class HomePage {
    @ViewChild(Content) content: Content;
    bravecamPage = BravecamPage;

cardOpened : boolean;
openCard : {
  one:boolean,
  two:boolean,
  three:boolean,
  four:boolean
};
allCardsClosed : boolean;
  constructor(public navCtrl: NavController) {
    this.allCardsClosed = true;
    this.cardOpened = false;
    this.openCard = {
  one:false,
  two:false,
  three:false,
  four:false
};


  }
}

