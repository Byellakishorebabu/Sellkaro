import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilephonesPage } from './mobilephones.page';

const routes: Routes = [
  {
    path: '',
    component: MobilephonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilephonesPageRoutingModule {}
