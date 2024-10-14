import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceanadPage } from './placeanad.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceanadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceanadPageRoutingModule {}
