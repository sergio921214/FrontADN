import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listar() {
    this.router.navigate(['usuarios/listar']);
  }

  editar() {
    this.router.navigate(['auto/crear']);
  }

}
