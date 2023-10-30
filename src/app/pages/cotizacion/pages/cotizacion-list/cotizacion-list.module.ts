import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionListRoutingModule } from './cotizacion-list-routing.module';
import { CotizacionListComponent } from './cotizacion-list.component';


@NgModule({
  declarations: [
    CotizacionListComponent
  ],
  imports: [
    CommonModule,
    CotizacionListRoutingModule
  ]
})
export class CotizacionListModule { }
