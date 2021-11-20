import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservePaymentPageRoutingModule } from './reserve-payment-routing.module';

import { ReservePaymentPage } from './reserve-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservePaymentPageRoutingModule
  ],
  declarations: [ReservePaymentPage]
})
export class ReservePaymentPageModule {}
