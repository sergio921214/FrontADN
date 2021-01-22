import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PlacaService {
  constructor(protected http: HttpService) {}

  public listarPlacasDisponibles(): Observable<String[]> {
    return this.http.doGet<String[]>(
      `${environment.endpoint}autos/placasdisponibles`,
      this.http.optsName("listar")
    );
  }
}
