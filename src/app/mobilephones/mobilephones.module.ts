import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilephonesPageRoutingModule } from './mobilephones-routing.module';

import { MobilephonesPage } from './mobilephones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilephonesPageRoutingModule
  ],
  declarations: [MobilephonesPage]
})
export class MobilephonesPageModule {}
