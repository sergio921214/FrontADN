import { Injectable } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";

import { environment } from "src/environments/environment";
import { RentarAuto } from "../model/rentar-auto";

@Injectable({
  providedIn: "root",
})
export class RentarAutoService {
  constructor(protected http: HttpService) {}

  public listarRentasAuto() {
    return this.http.doGet<RentarAuto[]>(
      `${environment.endpoint}rentauto/listarentautos`,
      this.http.optsName("listarentas")
    );
  }

  public calcular(placa: String, fechaRenta: String, fechaEntrega: String) {
    return this.http.doGet<Number>(
      `${environment.endpoint}rentauto/totalrenta/${placa}/${fechaRenta}/${fechaEntrega}`,
      this.http.optsName("calcular")
    );
  }

  public rentar(rentaAuto: RentarAuto) {
    return this.http.doPost<RentarAuto, number>(
      `${environment.endpoint}rentauto`,
      rentaAuto,
      this.http.optsName("rentar")
    );
  }
}
