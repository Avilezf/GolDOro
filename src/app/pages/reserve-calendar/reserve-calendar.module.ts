import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveCalendarPageRoutingModule } from './reserve-calendar-routing.module';

import { ReserveCalendarPage } from './reserve-calendar.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveCalendarPageRoutingModule,
    CalendarModule
  ],
  declarations: [ReserveCalendarPage]
})
export class ReserveCalendarPageModule {}
