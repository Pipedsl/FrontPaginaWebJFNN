import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionListComponent } from './cotizacion-list.component';

const routes: Routes = [
  {
    path: '',
    component: CotizacionListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionListRoutingModule { }
