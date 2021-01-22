import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutoModule } from 'src/app/feature/auto/auto.module';
import { RentarAutoModule } from 'src/app/feature/rentar-auto/rentar-auto.module';
import { UsuariosModule } from "src/app/feature/usuarios/usuarios.module";
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from "@login/components/login/login.component";
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterDialogComponent } from './feature/login/components/register-dialog/register-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterDialogComponent
  ],
  imports: [
    AutoModule,
    RentarAutoModule,
    UsuariosModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
