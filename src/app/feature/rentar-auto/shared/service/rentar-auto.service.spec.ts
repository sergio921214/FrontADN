import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RentarAutoService } from './rentar-auto.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { RentarAuto } from '../model/rentar-auto';


describe('AutoService', () => {
  let httpMock: HttpTestingController;
  let service: RentarAutoService;
  const apiEndpointRentarAutoConsulta = `${environment.endpoint}rentauto/listarentautos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RentarAutoService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RentarAutoService);
  });

  it('should be created', () => {
    const rentarAutoService: RentarAutoService = TestBed.inject(
      RentarAutoService
    );
    expect(rentarAutoService).toBeTruthy();
  });

  it('deberia listar rentas de auto', () => {
    const rentarAutoFirst = new RentarAuto();
    rentarAutoFirst.placa = 'ABC123';
    rentarAutoFirst.fechaRenta = '2021-01-01';
    rentarAutoFirst.fechaEntrega = '2021-01-05';
    rentarAutoFirst.precioTotalRenta = 250000;
    const rentarAutoSecond = new RentarAuto();
    rentarAutoSecond.placa = 'ANC321';
    rentarAutoSecond.fechaRenta = '2021-01-01';
    rentarAutoSecond.fechaEntrega = '2021-01-05';
    rentarAutoSecond.precioTotalRenta = 250000;
    const dummyRentaAutos = [
        rentarAutoFirst,
        rentarAutoSecond,
    ];
    service.listarRentasAuto().subscribe((autos) => {
      expect(autos.length).toBe(2);
      expect(autos).toEqual(dummyRentaAutos);
    });
    const req = httpMock.expectOne(apiEndpointRentarAutoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRentaAutos);
  });
});
