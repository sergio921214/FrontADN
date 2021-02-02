import { Component, OnInit } from '@angular/core';
import { RentarAuto } from '../../shared/model/rentar-auto';
import { RentarAutoService } from '../../shared/service/rentar-auto.service';

@Component({
  selector: 'app-listar-renta-auto',
  templateUrl: './listar-renta-auto.component.html',
  styleUrls: ['./listar-renta-auto.component.css']
})
export class ListarRentasAutoComponent implements OnInit {

  public rentas: RentarAuto[];

  constructor(private rentarAutoService: RentarAutoService) { }

  ngOnInit() {
    this.rentarAutoService.listarRentasAuto().subscribe(res => {
      this.rentas = res;
    });
  }



}
