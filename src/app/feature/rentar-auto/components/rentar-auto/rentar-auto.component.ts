import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentar-auto',
  templateUrl: './rentar-auto.component.html',
  styleUrls: ['./rentar-auto.component.css']
})
export class RentarAutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  rentar() {
    this.router.navigate(['rentar-auto/rentar']);
  }

  listar() {
    this.router.navigate(['rentar-auto/listar']);
  }

}
