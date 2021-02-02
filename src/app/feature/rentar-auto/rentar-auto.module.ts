import { NgModule } from '@angular/core';

import { RentarAutoRoutingModule } from './rentar-auto-routing.module';
import { GuardarRentaAutoComponent } from './components/guardar-renta-auto/guardar-renta-auto.component';
import { ListarRentasAutoComponent } from './components/listar-renta-auto/listar-renta-auto.component';
import { RentarAutoComponent } from './components/rentar-auto/rentar-auto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentarAutoService } from './shared/service/rentar-auto.service';

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
  providers: [RentarAutoService]
})
export class RentarAutoModule { }
