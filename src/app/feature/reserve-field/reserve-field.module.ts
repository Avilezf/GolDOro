import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveFieldPageRoutingModule } from './reserve-field-routing.module';

import { ReserveFieldPage } from './reserve-field.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveFieldPageRoutingModule
  ],
  declarations: [ReserveFieldPage]
})
export class ReserveFieldPageModule {}
