import { Component, ViewChild} from '@angular/core';

import { NavController, AlertController, Slides } from 'ionic-angular';

import { AboutPage } from '../about/about';

import { WorkPage } from '../work/work';



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
    aboutPage = AboutPage;
    workPage = WorkPage;
    showLogo : boolean;
   // myAlert: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.showLogo=true;
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


 slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
    if(currentIndex > 0){
    this.showLogo=false;
  }
  else{
        this.showLogo=true;

  }
  }


}

