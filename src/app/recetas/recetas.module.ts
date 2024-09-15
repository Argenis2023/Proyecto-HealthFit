import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasPageRoutingModule } from './recetas-routing.module';

import { RecetasPage } from './recetas.page';
import { AlertComponent } from '../components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule
    
  ],
  declarations: [RecetasPage,AlertComponent]
})
export class RecetasPageModule {}
export class AppModule { }
