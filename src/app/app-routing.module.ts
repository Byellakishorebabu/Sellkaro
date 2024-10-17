import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'mobilephones',
    pathMatch: 'full'
  },
  {
    path: 'placeanad',
    loadChildren: () => import('./placeanad/placeanad.module').then( m => m.PlaceanadPageModule)
  },
  {
    path: 'mobilephones',
    loadChildren: () => import('./mobilephones/mobilephones.module').then( m => m.MobilephonesPageModule)
  },

  {
    path: 'tabletsmobiles',
    loadChildren: () => import('./tabletsmobiles/tabletsmobiles.module').then( m => m.TabletsmobilesPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'mobiledetails',
    loadChildren: () => import('./mobiledetails/mobiledetails.module').then( m => m.MobiledetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
