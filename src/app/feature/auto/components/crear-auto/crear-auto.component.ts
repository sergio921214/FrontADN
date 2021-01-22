import { AutoService } from './../../shared/service/auto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CombustibleService } from '../../shared/service/combustible/combustible.service';


@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css']
})
export class CrearAutoComponent implements OnInit {

  crearForm: FormGroup;
  enviado = false;
  public tiposCombustible: String[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autoService: AutoService,
    private combustibleService: CombustibleService
    ) {}

  ngOnInit() {
    this.combustibleService.obtenerTiposCombustible().subscribe(res => {
      this.tiposCombustible = res;
    });
    this.crearForm = this.formBuilder.group({
      id: [],
      placa: ['', Validators.required],
      tipoCombustible: ['', Validators.required],
      precioPorDia: ['', Validators.required],
      multiplicadorFinSemana: ['', Validators.required],
    });
  }

  get fc() {
    return this.crearForm.controls;
  }

  onSubmit() {
    this.enviado = true;
    // Detener si se presenta un problema en el formulario
    if (this.crearForm.invalid) {
      return;
    }
    this.autoService.crear(this.crearForm.value)
       .subscribe( data => {
         console.log(data);
        this.router.navigate(['auto']); 
      }); 

    
  }

}
