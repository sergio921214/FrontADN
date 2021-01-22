import { NgModule } from '@angular/core';

import { AutoRoutingModule } from './auto-routing.module';
import { ListarAutoComponent } from './components/listar-auto/listar-auto.component';
import { ListarAutoDisponibleComponent } from "./components/listar-auto-disponible/listar-auto-disponible.component";
import { ListarAutoRentadoComponent } from "./components/listar-auto-rentado/listar-auto-rentado.component";
import { CrearAutoComponent } from "./components/crear-auto/crear-auto.component";
import { AutoComponent } from './components/auto/auto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ManejadorError } from 'src/app/core/interceptor/manejador-error';


@NgModule({
  declarations: [
    ListarAutoComponent,
    ListarAutoDisponibleComponent,
    ListarAutoRentadoComponent,
    CrearAutoComponent,
    AutoComponent
  ],
  imports: [
    AutoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
/*    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManejadorError,
      multi: true
    }
  ],  */
})
export class AutoModule { }