import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../modelo/usuario";

import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = `https://reqres.in/api`;

  userToken: string;

  constructor(private http: HttpClient, private router: Router) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  login(usuario: Usuario) {
    return this.http.post(`${this.url}/login`, usuario).pipe(
      map((resp) => {
        this.guardarToken(resp["token"]);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);

    //Puede implementarse para agregar tiempo de expiración al token/sesión

    // let hoy = new Date();
    // hoy.setSeconds( 3600 );

    // localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }

    return this.userToken;
  }

  estaAutenticado()  {
    return localStorage.getItem("token");
    // if (localStorage.getItem("token")) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
