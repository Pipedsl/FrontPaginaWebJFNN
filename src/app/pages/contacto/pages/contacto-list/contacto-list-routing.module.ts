import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoListComponent } from './contacto-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoListRoutingModule { }
