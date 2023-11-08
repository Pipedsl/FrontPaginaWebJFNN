import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'agregar',
    loadChildren: () => import('./pages/cotizacion-agregar/cotizacion-agregar.module').then(m=>m.CotizacionAgregarModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/cotizacion-list/cotizacion-list.module').then(m=>m.CotizacionListModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionRoutingModule { }
