import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.router.navigate(['auto/crear']);
  }

  listar() {
    this.router.navigate(['auto/listar']);
  }

  listarDisponibles() {
    this.router.navigate(['auto/listardisponibles']);
  }

  listarRentados() {
    this.router.navigate(['auto/listarentados']);
  }
}