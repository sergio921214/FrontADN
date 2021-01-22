import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { environment } from "src/environments/environment";
import { Auto } from "../model/auto";

@Injectable({
  providedIn: "root",
})
export class AutoService {
  constructor(protected http: HttpService) {}

  public listar() {
    return this.http.doGet<Auto[]>(
      `${environment.endpoint}autos`,
      this.http.optsName("lIstar")
    );
  }

  public listarDisponibles(): Observable<Auto[]> {
    console.log("llega al listar");
    return this.http.doGet<Auto[]>(
      `${environment.endpoint}autos/disponibles`,
      this.http.optsName("lIstar")
    );
  }

  public listarRentados(): Observable<Auto[]> {
    console.log("llega al listar");
    return this.http.doGet<Auto[]>(
      `${environment.endpoint}autos/rentados`,
      this.http.optsName("lIstar")
    );
  }

  public crear(auto: Auto) {
    return this.http.doPost<Auto, number>(
      `${environment.endpoint}auto`,
      auto,
      this.http.optsName("crear")
    );
  }
}
