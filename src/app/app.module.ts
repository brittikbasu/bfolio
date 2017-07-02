import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { BlogPage } from '../pages/blog/blog';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { SkillsPage } from '../pages/skills/skills';
import { WorkPage } from '../pages/work/work';
import { BravecamPage } from '../pages/bravecam/bravecam';
import { ChaldiyePage } from '../pages/chaldiye/chaldiye';
import { PolysparesPage } from '../pages/polyspares/polyspares';
import { PolizeigewaltPage } from '../pages/polizeigewalt/polizeigewalt';
import { GetintouchPage } from '../pages/getintouch/getintouch';



@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    ContactPage,
    HomePage,
    SkillsPage,
    TabsPage,
    AboutPage,
    WorkPage,
    BravecamPage,
    ChaldiyePage,
    PolysparesPage,
    PolizeigewaltPage,
    GetintouchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:'true',
    tabsPlacement: 'top',
  platforms: {
    ios: {
      tabsPlacement: 'bottom'
    },
    android: {
      tabsPlacement: 'bottom'
    },
    core: {
            tabsPlacement: 'top'
    },
    mobileweb:{
                  tabsPlacement: 'bottom'

    }
  }}),
     BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    ContactPage,
    HomePage,
    SkillsPage,
    TabsPage,
    AboutPage,
    WorkPage,
    BravecamPage,
    ChaldiyePage,
    PolysparesPage,
    PolizeigewaltPage,
    GetintouchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
