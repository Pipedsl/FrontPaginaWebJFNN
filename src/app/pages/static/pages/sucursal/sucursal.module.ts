import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalComponent } from './sucursal.component';


@NgModule({
  declarations: [
    SucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalRoutingModule
  ]
})
export class SucursalModule { }
