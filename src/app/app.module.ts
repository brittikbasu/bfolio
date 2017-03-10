import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BlogPage } from '../pages/blog/blog';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BravecamPage } from '../pages/bravecam/bravecam';
import { ChaldiyePage } from '../pages/chaldiye/chaldiye';
import { PolysparesPage } from '../pages/polyspares/polyspares';
import { PolizeigewaltPage } from '../pages/polizeigewalt/polizeigewalt';


@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    ContactPage,
    HomePage,
    TabsPage,
    BravecamPage,
    ChaldiyePage,
    PolysparesPage,
    PolizeigewaltPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages:'true'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    ContactPage,
    HomePage,
    TabsPage,
    BravecamPage,
    ChaldiyePage,
    PolysparesPage,
    PolizeigewaltPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
