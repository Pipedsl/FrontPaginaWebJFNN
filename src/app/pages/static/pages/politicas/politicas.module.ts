import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticasRoutingModule } from './politicas-routing.module';
import { PoliticasComponent } from './politicas.component';


@NgModule({
  declarations: [
    PoliticasComponent
  ],
  imports: [
    CommonModule,
    PoliticasRoutingModule
  ]
})
export class PoliticasModule { }
