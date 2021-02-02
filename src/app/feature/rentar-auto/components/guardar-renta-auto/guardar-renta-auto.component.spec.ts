import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GuardarRentaAutoComponent } from './guardar-renta-auto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RentarAutoService } from '../../shared/service/rentar-auto.service';
import { HttpService } from 'src/app/core/services/http.service';

describe('GuardarRentaAuto', () => {
  let component: GuardarRentaAutoComponent;
  let fixture: ComponentFixture<GuardarRentaAutoComponent>;
  let rentarAutoService: RentarAutoService;
  const listaPlacasDisponibles = [
    'ABC123', 'ABC321'
  ];
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarRentaAutoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        RentarAutoService, HttpService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarRentaAutoComponent);
    component = fixture.componentInstance;
    rentarAutoService = TestBed.inject(RentarAutoService);
    spyOn(rentarAutoService, 'listarPlacasDisponibles').and.returnValue(
      of(listaPlacasDisponibles)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe validar formulario invalido', () => {
    (document.getElementById('boton_guardar')).click();
    expect(component.crearForm.invalid).toBeTruthy();
  });
  it('Calculando renta auto', () => {
    expect(component.crearForm.valid).toBeFalsy();
    component.crearForm = formBuilder.group({
      placa: 'ABC123',
      fechaRenta: '2020-12-25',
      fechaEntrega: '2020-12-30'
    });
    expect(component.crearForm.valid).toBeTruthy();
  });
});
