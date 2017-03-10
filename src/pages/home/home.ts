import { Component, ViewChild } from '@angular/core';

import { NavController, Content } from 'ionic-angular';

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
    @ViewChild(Content) content: Content;
    bravecamPage = BravecamPage;
    chaldiyePage = ChaldiyePage;
    polysparesPage = PolysparesPage;
    polizeigewaltPage = PolizeigewaltPage;
    allCardsClosed : boolean;
  constructor(public navCtrl: NavController) {}
}

