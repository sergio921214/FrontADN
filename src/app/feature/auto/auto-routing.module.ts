import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAutoComponent } from './components/listar-auto/listar-auto.component';
import { ListarAutoDisponibleComponent } from "./components/listar-auto-disponible/listar-auto-disponible.component";
import { ListarAutoRentadoComponent } from "./components/listar-auto-rentado/listar-auto-rentado.component";
import { CrearAutoComponent } from "./components/crear-auto/crear-auto.component";
import { AutoComponent } from './components/auto/auto.component';

const routes: Routes = [
  {
    path: '',
    component: AutoComponent,
    children: [
      {
        path: 'crear',
        component: CrearAutoComponent
      },
      {
        path: 'listar',
        component: ListarAutoComponent
      },
      {
        path: 'listardisponibles',
        component: ListarAutoDisponibleComponent
      },
      {
        path: 'listarentados',
        component: ListarAutoRentadoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoRoutingModule { }
