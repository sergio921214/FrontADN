import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Users } from "../model/usuarios";
import { Usuario } from "@core/modelo/usuario";

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable({
  providedIn: "root",
})
export class ReqResService {
  constructor(protected http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`https://reqres.in/api/users`).pipe(
      map((resp: Users[]) => {
        return resp["data"];
      })
    );
  }
//TODO separar responsabilidades 
  registerUser(usuario: Usuario): Observable<String> {
    return this.http.post(`https://reqres.in/api/register`, usuario).pipe(
      map((resp) => {
        return resp["token"];
      })
    );
  }
  editUser(usuario: Users, id: number): Observable<String> {
    
    return this.http.put(`https://reqres.in/api/users/`+id, usuario).pipe(
      map((resp) => {
        return resp["email"];
      })
    );
  }
}
