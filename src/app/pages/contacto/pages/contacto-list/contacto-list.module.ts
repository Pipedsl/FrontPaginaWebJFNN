import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoListRoutingModule } from './contacto-list-routing.module';
import { ContactoListComponent } from './contacto-list.component';
import { SpinnerModule } from '@app/shared/indicators';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ContactoListComponent
  ],
  imports: [
    CommonModule,
    ContactoListRoutingModule,

    SpinnerModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class ContactoListModule { }
