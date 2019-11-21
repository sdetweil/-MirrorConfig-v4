import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasourceModalPageRoutingModule } from './datasource-modal-routing.module';
import { DatasourceModalPage } from './datasource-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatasourceModalPageRoutingModule
  ],
  declarations: [DatasourceModalPage], 
  entryComponents:[ DatasourceModalPage],
  exports:[]
})
export class DatasourceModalPageModule {}
