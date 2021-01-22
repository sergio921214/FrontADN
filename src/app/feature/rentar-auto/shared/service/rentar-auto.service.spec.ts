import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { RentarAutoService } from "./rentar-auto.service";
import { environment } from 'src/environments/environment';
import { HttpService } from "src/app/core/services/http.service";
import { RentarAuto } from "../model/rentar-auto";
//import { HttpResponse } from '@angular/common/http';

describe("AutoService", () => {
  let httpMock: HttpTestingController;
  let service: RentarAutoService;
  const apiEndpointRentarAutoConsulta = `${environment.endpoint}rentauto/listarentautos`;

  /* const apiEndpointCalcularRenta = `${environment.endpoint}rentauto/totalrenta/`;
  
  const apiEndpointAutoRentadoConsulta = `${environment.endpoint}autos/rentados`;
  const apiEndpointAuto = `${environment.endpoint}auto`; */

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RentarAutoService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RentarAutoService);
  });

  it("should be created", () => {
    const rentarAutoService: RentarAutoService = TestBed.inject(
      RentarAutoService
    );
    expect(rentarAutoService).toBeTruthy();
  });

  /*    it('deberia calcular renta auto', () => {
    const dummyAuto = new Auto('ABC444', 'ELECTRICO', 30000, 2);
    const respuesta = { valor: 1};
    service.crear(dummyAuto).subscribe((respuesta) => {
      expect(respuesta['valor'].valueOf()).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointAuto);
    expect(req.request.method).toBe('POST');
    req.flush(respuesta);
   
  }); */

  it("deberia listar rentas de auto", () => {
    const rentarAutoFirst = new RentarAuto();
    rentarAutoFirst.placa = 'ABC123'
    rentarAutoFirst.fechaRenta = '2021-01-01';
    rentarAutoFirst.fechaEntrega = '2021-01-05';
    rentarAutoFirst.precioTotalRenta = 250000;
    const rentarAutoSecond = new RentarAuto();
    rentarAutoSecond.placa = 'ANC321'
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
    expect(req.request.method).toBe("GET");
    req.flush(dummyRentaAutos);
  });
});
