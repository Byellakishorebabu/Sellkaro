import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceanadPageRoutingModule } from './placeanad-routing.module';

import { PlaceanadPage } from './placeanad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceanadPageRoutingModule
  ],
  declarations: [PlaceanadPage]
})
export class PlaceanadPageModule {}
