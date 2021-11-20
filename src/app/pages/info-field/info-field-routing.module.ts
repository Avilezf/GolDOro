import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFieldPage } from './info-field.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFieldPageRoutingModule {}
