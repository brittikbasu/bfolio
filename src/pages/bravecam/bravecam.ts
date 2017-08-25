import {
  Component,
  ViewChild
} from '@angular/core';
import {
  NavController,
  NavParams,
  Events
} from 'ionic-angular';


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
    events.subscribe('language:changed', (deutsch) => {
      this.de = deutsch;
      if (this.de) {
        console.log("bravecam is in german");
      }
      else{
                console.log("bravecam is NOT in german");

      }
      console.log("DE is ", this.de);

      // alert("awsome!");
    });
  }

  ionViewDidLoad() {
    console.log(this.de, "cool");
    console.log('ionViewDidLoad BravecamPage');

  }

  newTab(url) {
    this.win = window.open(url, '_blank');
    this.win.focus();
  }

}
