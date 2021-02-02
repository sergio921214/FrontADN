import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `https://reqres.in/api`;
  private TOKEN = 'token';

  userToken: string;

  constructor(private http: HttpClient, private router: Router) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem(this.TOKEN);
    this.router.navigateByUrl('/login');
  }

  login(usuario: Usuario) {
    return this.http.post(`${this.url}/login`, usuario).pipe(
      map((resp) => {
        this.guardarToken(resp[this.TOKEN]);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem(this.TOKEN, idToken);
  }

  leerToken() {
    if (localStorage.getItem(this.TOKEN)) {
      this.userToken = localStorage.getItem(this.TOKEN);
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado()  {
    return localStorage.getItem(this.TOKEN);
  }
}
