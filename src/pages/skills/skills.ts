import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SkillsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {
deutsch: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.events.subscribe('language:changed', deutsch =>{
      this.deutsch = deutsch;
    } )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

}
