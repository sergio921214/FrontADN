import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../model/usuarios';
import { Usuario } from '@core/modelo/usuario';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable({
  providedIn: 'root',
})
export class ReqResService {
  email = 'email';
  token = 'token';
  data = 'data';

  constructor(protected http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`https://reqres.in/api/users`).pipe(
      map((resp: Users[]) => {
        return resp[this.data];
      })
    );
  }
  // TODO separar responsabilidades
  registerUser(usuario: Usuario): Observable<string> {
    return this.http.post(`https://reqres.in/api/register`, usuario).pipe(
      map((resp) => {
        return resp[this.token];
      })
    );
  }
  editUser(usuario: Users, id: number): Observable<string> {
    return this.http.put(`https://reqres.in/api/users/` + id, usuario).pipe(
      map((resp) => {
        return resp[this.email];
      })
    );
  }
}
