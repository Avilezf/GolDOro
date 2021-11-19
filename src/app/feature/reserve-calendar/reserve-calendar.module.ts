import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveCalendarPageRoutingModule } from './reserve-calendar-routing.module';

import { ReserveCalendarPage } from './reserve-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveCalendarPageRoutingModule
  ],
  declarations: [ReserveCalendarPage]
})
export class ReserveCalendarPageModule {}
