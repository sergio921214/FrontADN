import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardarRentaAutoComponent } from './components/guardar-renta-auto/guardar-renta-auto.component';
import { RentarAutoComponent } from './components/rentar-auto/rentar-auto.component';
import { ListarRentasAutoComponent } from './components/listar-renta-auto/listar-renta-auto.component';

const routes: Routes = [
  {
    path: '',
    component: RentarAutoComponent,
    children: [
      {
        path: 'rentar-auto/rentar',
        component: GuardarRentaAutoComponent
      },
      {
        path: 'rentar-auto/listar',
        component: ListarRentasAutoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentarAutoRoutingModule { }
