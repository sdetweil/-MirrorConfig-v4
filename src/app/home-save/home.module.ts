import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { IonicPageModule } from '@ionic/angular';
import { HomePage } from './home.page';
@NgModule({
  declarations: [HomePage],
exports: [ HomePage],
schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {
 
 constructor(){
    console.log("in home module constructor");
 }

 }
