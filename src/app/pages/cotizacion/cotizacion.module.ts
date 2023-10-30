import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionRoutingModule } from './cotizacion-routing.module';
import { StoreModule } from '@ngrx/store';

import { reducers, effects } from '@app/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CotizacionRoutingModule,

    StoreModule.forFeature('cotizacion', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class CotizacionModule { }
