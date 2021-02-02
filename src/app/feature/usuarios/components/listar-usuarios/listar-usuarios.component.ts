import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ReqResService } from '../../../../shared/servicios/req-res.service';
import { Users } from '../../../../shared/model/usuarios';
import { DialogEditarComponent } from '../editar-usuarios/dialog-editar.component';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  public users: Users[] = [];
  constructor(private reqResService: ReqResService, public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'action',
  ];
  dataSource: MatTableDataSource<Users>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.reqResService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);

      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }
  openDialog(obj) {
    this.dialog.open(DialogEditarComponent, {
      width: '250px',
      data: obj,
    });
  }
}
