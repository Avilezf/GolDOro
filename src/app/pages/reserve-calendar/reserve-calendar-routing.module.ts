import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveCalendarPage } from './reserve-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveCalendarPageRoutingModule {}
