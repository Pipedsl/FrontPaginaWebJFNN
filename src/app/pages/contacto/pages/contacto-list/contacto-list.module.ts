import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoListRoutingModule } from './contacto-list-routing.module';
import { ContactoListComponent } from './contacto-list.component';


@NgModule({
  declarations: [
    ContactoListComponent
  ],
  imports: [
    CommonModule,
    ContactoListRoutingModule
  ]
})
export class ContactoListModule { }
