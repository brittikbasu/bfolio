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
    about : boolean;
    work : boolean;
    contact : boolean;
    slidesData: any;
    slideNo : number;
    secondaryBright:boolean;
   // myAlert: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.slideNo = 0;
      this.about = true;
this.secondaryBright = false;
      this.slidesData = [{
          img:"assets/img/brittik_basu.jpg",
          headline:"Brittik Basu",
          paragraph: "UX Designer & Front-end Developer"
      },
       {
          img:"assets/img/brittik_basu.jpg",
          headline:"My Skills",
          paragraph: "Exciting projects I've worked on"
        }, 
       {
          img:"assets/img/brittik_basu.jpg",
          headline:"My Work",
          paragraph: "Exciting projects I've worked on"
        }, 
        {
          img:"assets/img/brittik_basu.jpg",
          headline:"Get in Touch",
          paragraph: "hello(at)brittikbasu.com"
        }];
       

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

 goToSlide() {
    this.slides.slideTo(2, 500);
  }

 slideChanged() {
   if(this.slides.getActiveIndex() >3){
     console.log("Treason");
   }
   else{

this.slideNo = this.slides.getActiveIndex();
    console.log("Current index is", this.slideNo);
    if(this.slideNo == 0){
      this.secondaryBright = false;

    this.about=true;
            this.contact=false;
        this.work=false;
        console.log("on about slide");
            this.slides.slideTo(0, 500);

  }
  else if(this.slideNo ==1){
        this.work=true;
        this.about=false;
        this.contact=false;
        console.log("on work slide");
        this.slides.slideTo(1, 500);
        window.setTimeout(()=> this.secondaryBright = true, 750);


  }
  else if(this.slideNo == 2) {
        this.contact=false;
             this.work=false;
        this.about=false;
        console.log("on contact slide");
            this.slides.slideTo(2, 500);
        window.setTimeout(()=> this.secondaryBright = true, 350);

  }

  else if(this.slideNo == 3) {
        this.contact=true;
             this.work=false;
        this.about=false;
        console.log("on contact slide");
            this.slides.slideTo(3, 500);
        window.setTimeout(()=> this.secondaryBright = true, 350);

  }


   }
    
  }



}

