import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@app/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactoRoutingModule,

    StoreModule.forFeature('contacto', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class ContactoModule { }
