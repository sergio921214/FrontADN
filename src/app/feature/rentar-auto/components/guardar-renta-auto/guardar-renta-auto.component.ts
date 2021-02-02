import { RentarAutoService } from './../../shared/service/rentar-auto.service';
import { ReqResService } from '../../../../shared/servicios/req-res.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RentarAuto } from '@rentar-auto/shared/model/rentar-auto';
import { Router } from '@angular/router';
import { Users } from '@shared/model/usuarios';
import { PlacaService } from '../../shared/service/placa-service/placa.service';

@Component({
  selector: 'app-guardar-renta-auto',
  templateUrl: './guardar-renta-auto.component.html',
  styleUrls: ['./guardar-renta-auto.component.css'],
})
export class GuardarRentaAutoComponent implements OnInit {
  valor = 'valor';
  crearForm: FormGroup;
  enviado = false;
  mostrarAlerta = false;
  totalRenta: number;
  fechaRenta: string;
  fechaEntrega: string;
  public placas: string[];
  public usuarios: Users[];
  public nombreUsuarios: string[] = [];
  isError = false;
  mensajeError: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rentarAutoService: RentarAutoService,
    private reqResService: ReqResService,
    private placaService: PlacaService
    ) {}

  ngOnInit() {
    this.placaService.listarPlacasDisponibles().subscribe((res) => {
      this.placas = res;
    });
    this.reqResService.getUsers().subscribe((res) => {
      this.usuarios = res;
      this.usuarios.forEach((usuario) => {
        this.nombreUsuarios.push(usuario.firstName);
      });
    });

    this.crearForm = this.formBuilder.group({
      id: [],
      placa: ['', Validators.required],
      usuario: ['', Validators.required],
      fechaRenta: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
    });
  }

  // Retornar para hacer mas facil la estructura del HTML
  get fc() {
    return this.crearForm.controls;
  }

  onSubmit() {
    this.fechaRenta = (document.getElementById(
      'input_fecha_renta'
    ) as HTMLInputElement).value;
    this.fechaEntrega = (document.getElementById(
      'input_fecha_entrega'
    ) as HTMLInputElement).value;
    this.enviado = true;
    if (
      this.validarFechaRentaMenorFechaEntrega(
        this.fechaRenta,
        this.fechaEntrega
      )
    ) {
      return;
    }

    this.rentarAutoService
      .calcular(this.crearForm.value.placa, this.fechaRenta, this.fechaEntrega)
      .subscribe((data) => {
        console.log(data);
        console.log('alerta antes : ' + this.mostrarAlerta);
        this.totalRenta = data[this.valor].valueOf();
        this.mostrarAlerta = true;
        console.log('el valor de la renta ' + this.totalRenta);
      });
  }

  confirmarRenta() {
    const rentarAuto = new RentarAuto();
    rentarAuto.placa = this.crearForm.value.placa;
    rentarAuto.fechaRenta = this.fechaRenta;
    rentarAuto.fechaEntrega = this.fechaEntrega;
    rentarAuto.precioTotalRenta = this.totalRenta;
    this.rentarAutoService.rentar(rentarAuto).subscribe((data) => {
      console.log(data);
      this.router.navigate(['rentar-auto']);
    });
  }
  cancelarRenta() {
    this.mostrarAlerta = false;
    console.log('la renta se cancela');
  }

  validarFechaRentaMenorFechaEntrega(fechaRenta, fechaEntrega) {
    if (new Date(fechaEntrega) <= new Date(fechaRenta)) {
      this.isError = true;
      this.mensajeError =
        'La fecha de Entrega debe ser mayor a la fecha de renta';
      return true;
    } else {
      this.isError = false;
      return false;
    }
  }
}
