import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabletsmobilesPageRoutingModule } from './tabletsmobiles-routing.module';

import { TabletsmobilesPage } from './tabletsmobiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabletsmobilesPageRoutingModule
  ],
  declarations: [TabletsmobilesPage]
})
export class TabletsmobilesPageModule {}
