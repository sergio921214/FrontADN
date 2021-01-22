import { Component, OnInit } from '@angular/core';
import { Auto } from '../../shared/model/auto';
import { AutoService } from '../../shared/service/auto.service';

@Component({
  selector: 'app-listar-auto-rentado',
  templateUrl: './listar-auto-rentado.component.html',
  styleUrls: ['./listar-auto-rentado.component.css']
})
export class ListarAutoRentadoComponent implements OnInit {

  public autos: Auto[];

  constructor(private autoService: AutoService) { }

  ngOnInit() {
    this.autoService.listarRentados().subscribe(res => {
      this.autos = res;
    });
  }

}
