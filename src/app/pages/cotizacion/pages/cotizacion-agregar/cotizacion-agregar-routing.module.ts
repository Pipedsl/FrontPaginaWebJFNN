import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionAgregarComponent } from './cotizacion-agregar.component';

const routes: Routes = [
  {
    path:'',
    component: CotizacionAgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionAgregarRoutingModule { }
