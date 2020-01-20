import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotsPageRoutingModule } from './slots-routing.module';

import { SlotsPage } from './slots.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    SlotsPageRoutingModule
  ],
  declarations: [SlotsPage]
})
export class SlotsPageModule {}
