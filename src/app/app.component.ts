import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/auto', nombre: 'Auto' },
    { url: '/rentar-auto', nombre: 'Rentar Auto' },
    { url: '/usuarios', nombre: 'Usuarios' }
    
  ];
  logueado(){
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }

  }  
}
