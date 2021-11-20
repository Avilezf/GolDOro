import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveSucessPageRoutingModule } from './reserve-sucess-routing.module';

import { ReserveSucessPage } from './reserve-sucess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveSucessPageRoutingModule
  ],
  declarations: [ReserveSucessPage]
})
export class ReserveSucessPageModule {}
