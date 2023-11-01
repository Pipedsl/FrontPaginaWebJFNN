import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionListRoutingModule } from './cotizacion-list-routing.module';
import { CotizacionListComponent } from './cotizacion-list.component';
import { SpinnerModule } from '@app/shared/indicators';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CotizacionListComponent
  ],
  imports: [
    CommonModule,
    CotizacionListRoutingModule,

    SpinnerModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class CotizacionListModule { }
