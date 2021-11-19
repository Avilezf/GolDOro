import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveFieldPage } from './reserve-field.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveFieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveFieldPageRoutingModule {}
