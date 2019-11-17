import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StartupPage } from './startup';

@NgModule({
  declarations: [
  StartupPage
  ],
  imports: [
    IonicModule
  ],
})
export class StartupPageModule {
constructor(){
		console.log("in startup module constructor");
}
}
