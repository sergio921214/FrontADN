import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AutoService } from './auto.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Auto } from '../model/auto';


describe('AutoService', () => {
  let httpMock: HttpTestingController;
  let service: AutoService;
  const apiEndpointAutoConsulta = `${environment.endpoint}autos`;
  const apiEndpointAutoDisponibleConsulta = `${environment.endpoint}autos/disponibles`;
  const apiEndpointAutoRentadoConsulta = `${environment.endpoint}autos/rentados`;
  const apiEndpointAuto = `${environment.endpoint}auto`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AutoService);
  });

  it('should be created', () => {
    const autoService: AutoService = TestBed.inject(AutoService);
    expect(autoService).toBeTruthy();
  });

  it('deberia crear un auto', () => {
    const dummyAuto = new Auto('ABC444', 'ELECTRICO', 30000, 2);
    const respuesta = { valor: 1};
    const VALOR = 'valor';
    service.crear(dummyAuto).subscribe((res) => {
      expect(res[VALOR].valueOf()).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointAuto);
    expect(req.request.method).toBe('POST');
    req.flush(respuesta);

  });

  it('deberia listar autos', () => {
    const dummyAutos = [
      new Auto('ABC123', 'GAS', 30000, 2), new Auto('ANC321', 'GASOLINA', 20000, 3)
    ];

    service.listar().subscribe(autos => {
      expect(autos.length).toBe(2);
      expect(autos).toEqual(dummyAutos);
    });
    const req = httpMock.expectOne(apiEndpointAutoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAutos);
  });

  it('deberia listar autos disponibles', () => {
    const dummyAutos = [

      new Auto('ABC123', 'GAS', 30000, 2), new Auto('ANC321', 'GASOLINA', 20000, 3)
    ];
    service.listarDisponibles().subscribe(autos => {
      expect(autos.length).toBe(2);
      expect(autos).toEqual(dummyAutos);
    });
    const req = httpMock.expectOne(apiEndpointAutoDisponibleConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAutos);
  });

  it('deberia listar autos rentados', () => {
    const dummyAutos = [

      new Auto('ABC123', 'GAS', 30000, 2), new Auto('ANC321', 'GASOLINA', 20000, 3)
    ];
    service.listarRentados().subscribe(autos => {
      expect(autos.length).toBe(2);
      expect(autos).toEqual(dummyAutos);
    });
    const req = httpMock.expectOne(apiEndpointAutoRentadoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAutos);
  });



});
