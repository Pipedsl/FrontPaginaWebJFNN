import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoAgregarComponent } from './contacto-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoAgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoAgregarRoutingModule { }
