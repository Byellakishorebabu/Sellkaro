import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage
  },
  // {
  //   path: 'placeanad',
  //   loadChildren: () => import('./placeanad/placeanad.module').then( m => m.PlaceanadPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
