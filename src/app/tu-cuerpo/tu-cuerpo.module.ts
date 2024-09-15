import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuCuerpoPageRoutingModule } from './tu-cuerpo-routing.module';

import { TuCuerpoPage } from './tu-cuerpo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuCuerpoPageRoutingModule
  ],
  declarations: [TuCuerpoPage]
})
export class TuCuerpoPageModule {}
