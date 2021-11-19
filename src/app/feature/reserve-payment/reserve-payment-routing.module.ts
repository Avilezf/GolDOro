import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservePaymentPage } from './reserve-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ReservePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservePaymentPageRoutingModule {}
