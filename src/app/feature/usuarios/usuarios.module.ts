import { NgModule } from '@angular/core';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { DialogEditarComponent } from './components/editar-usuarios/dialog-editar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    DialogEditarComponent,
    UsuariosComponent,
  ],
  imports: [
    UsuariosRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class UsuariosModule {}
