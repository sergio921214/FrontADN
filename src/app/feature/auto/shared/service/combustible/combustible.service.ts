import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';



@Injectable()
export class CombustibleService {

  constructor(protected http: HttpService) {}

  public obtenerTiposCombustible(): Observable <string[]> {
    return this.http.doGet<string[]>(`${environment.endpoint}tipo-combustible`, this.http.optsName('listarTipoCombustible'));
  }
}
