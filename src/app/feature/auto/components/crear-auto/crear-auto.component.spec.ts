import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CrearAutoComponent } from './crear-auto.component';
import { AutoService } from '../../shared/service/auto.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

describe('CrearAutoComponent', () => {
  let component: CrearAutoComponent;
  let fixture: ComponentFixture<CrearAutoComponent>;
  let autoService: AutoService;
  const listaTiposCombustible = ['GAS', 'GASOLINA', 'ACPM', 'ELECTRICO'];
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAutoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [AutoService, HttpService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAutoComponent);
    component = fixture.componentInstance;
    autoService = TestBed.inject(AutoService);
    spyOn(autoService, 'obtenerTiposCombustible').and.returnValue(
      of(listaTiposCombustible)
    );
    spyOn(autoService, 'crear').and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe validar formulario invalido', () => {
    (document.getElementById('boton_guardar')).click();
    expect(component.crearForm.invalid).toBeTruthy();
  });

  it('Creando Auto', () => {
    expect(component.crearForm.valid).toBeFalsy();
    component.crearForm = formBuilder.group({
      placa: 'ABC123',
      tipoCombustible: 'GAS',
      precioPorDia: 20000,
      multiplicadorFinSemana: 2,
    });
    (document.getElementById('boton_guardar')).click();
    expect(component.crearForm.valid).toBeTruthy();
  });
});
