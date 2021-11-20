import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFieldPageRoutingModule } from './list-field-routing.module';

import { ListFieldPage } from './list-field.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFieldPageRoutingModule
  ],
  declarations: [ListFieldPage]
})
export class ListFieldPageModule {}
