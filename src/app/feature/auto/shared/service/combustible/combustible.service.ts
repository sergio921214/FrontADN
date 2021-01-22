import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CombustibleService {

  constructor(protected http: HttpService) {}

  public obtenerTiposCombustible(): Observable <String[]> {
    return this.http.doGet<String[]>(`${environment.endpoint}tipo-combustible`, this.http.optsName('listarTipoCombustible'));
  }


}