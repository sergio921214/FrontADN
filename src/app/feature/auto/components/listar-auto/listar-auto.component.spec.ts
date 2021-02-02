import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarAutoComponent } from './listar-auto.component';
import { AutoService } from '../../shared/service/auto.service';
import { Auto } from '../../shared/model/auto';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarAutoComponent', () => {
  let component: ListarAutoComponent;
  let fixture: ComponentFixture<ListarAutoComponent>;
  let autoService: AutoService;
  const listaAutos = [
    new Auto('ABC123', 'GAS', 30000, 2), new Auto('ANC321', 'GASOLINA', 20000, 3)
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAutoComponent ],
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
    fixture = TestBed.createComponent(ListarAutoComponent);
    component = fixture.componentInstance;
    autoService = TestBed.inject(AutoService);
    spyOn(autoService, 'listar').and.returnValue(
      of(listaAutos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe listar autos', () => {
    expect(component.autos).toBe(listaAutos);
  });
});
