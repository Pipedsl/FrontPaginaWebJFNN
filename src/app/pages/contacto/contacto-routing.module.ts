import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'agregar',
    loadChildren: () => import('./pages/contacto-agregar/contacto-agregar.module').then(m=>m.ContactoAgregarModule),
  },
  {
    path: 'list',
    loadChildren: () => import ('./pages/contacto-list/contacto-list.module').then(m=> m.ContactoListModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
