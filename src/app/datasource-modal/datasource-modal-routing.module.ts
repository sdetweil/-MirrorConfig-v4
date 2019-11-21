import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatasourceModalPage } from './datasource-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DatasourceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatasourceModalPageRoutingModule {}
