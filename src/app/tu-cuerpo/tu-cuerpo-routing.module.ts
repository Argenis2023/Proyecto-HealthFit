import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuCuerpoPage } from './tu-cuerpo.page';

const routes: Routes = [
  {
    path: '',
    component: TuCuerpoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuCuerpoPageRoutingModule {}
