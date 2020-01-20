import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotsPage } from './slots.page';

const routes: Routes = [
  {
    path: '',
    component: SlotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotsPageRoutingModule {}
