import { NgModule } from '@angular/core';

import { RentarAutoRoutingModule } from './rentar-auto-routing.module';
import { GuardarRentaAutoComponent } from "./components/guardar-renta-auto/guardar-renta-auto.component";
import { ListarRentasAutoComponent } from "./components/listar-renta-auto/listar-renta-auto.component";
import { RentarAutoComponent } from './components/rentar-auto/rentar-auto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ManejadorError } from 'src/app/core/interceptor/manejador-error';

@NgModule({
  declarations: [
    ListarRentasAutoComponent,
    GuardarRentaAutoComponent,
    RentarAutoComponent
  ],
  imports: [
    RentarAutoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
/*   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManejadorError,
      multi: true
    }
  ],  */
})
export class RentarAutoModule { }