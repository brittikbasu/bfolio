import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BlogPage } from '../blog/blog';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = BlogPage;
  tab3Root: any = ContactPage;
deutsch: boolean;
home: string = "Home";
contact: string = "Contact";
  constructor(public events: Events) {

    this.events.subscribe('language:changed', deutsch =>{
      this.deutsch = deutsch;
      if(deutsch){
        this.home = "Startseite";
        this.contact = "Kontakt";
      }
       else{
        this.home = "Home";
        this.contact = "Contact";
      }
});

  }
}
