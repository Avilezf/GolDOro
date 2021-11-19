import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFieldPageRoutingModule } from './info-field-routing.module';

import { InfoFieldPage } from './info-field.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFieldPageRoutingModule
  ],
  declarations: [InfoFieldPage]
})
export class InfoFieldPageModule {}
