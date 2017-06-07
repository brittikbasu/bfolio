import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }

}
