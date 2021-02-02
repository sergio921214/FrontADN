import { Component, OnInit } from '@angular/core';
import { Auto } from '../../shared/model/auto';
import { AutoService } from '../../shared/service/auto.service';

@Component({
  selector: 'app-listar-auto-disponible',
  templateUrl: './listar-auto-disponible.component.html',
  styleUrls: ['./listar-auto-disponible.component.css'],
})
export class ListarAutoDisponibleComponent implements OnInit {
  public autos: Auto[];

  constructor(private autoService: AutoService) {}

  ngOnInit() {
    this.autoService.listarDisponibles().subscribe((res) => {
      this.autos = res;
    });
  }
}
