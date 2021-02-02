import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarAutoRentadoComponent } from './listar-auto-rentado.component';
import { AutoService } from '../../shared/service/auto.service';
import { Auto } from '../../shared/model/auto';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarAutoRentadoComponent', () => {
  let component: ListarAutoRentadoComponent;
  let fixture: ComponentFixture<ListarAutoRentadoComponent>;
  let autoService: AutoService;
  const listaAutosRentados = [
    new Auto('ABC123', 'GAS', 30000, 2), new Auto('ANC321', 'GASOLINA', 20000, 3)
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAutoRentadoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        AutoService, HttpService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAutoRentadoComponent);
    component = fixture.componentInstance;
    autoService = TestBed.inject(AutoService);
    spyOn(autoService, 'listarRentados').and.returnValue(
      of(listaAutosRentados)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe listar autos disponibles', () => {
    expect(component.autos).toBe(listaAutosRentados);
  });
});
