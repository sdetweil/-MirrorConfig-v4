import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { AddressModalPage} from '../address-modal/address-modal.page';
import { ViewerModalPage} from '../viewer-modal/viewer-modal.page';
import { DatasourceModalPage} from '../datasource-modal/datasource-modal.page';
import { ImageModalPage} from '../image-modal/image-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule  
  ],
  declarations: [HomePage,AddressModalPage,ViewerModalPage,DatasourceModalPage,ImageModalPage],
  entryComponents:[AddressModalPage,ViewerModalPage,DatasourceModalPage,ImageModalPage]

})
export class HomePageModule {}
