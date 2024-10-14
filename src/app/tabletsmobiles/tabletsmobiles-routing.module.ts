import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletsmobilesPage } from './tabletsmobiles.page';

const routes: Routes = [
  {
    path: '',
    component: TabletsmobilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletsmobilesPageRoutingModule {}
