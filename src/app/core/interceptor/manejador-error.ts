import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
//import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
//import { environment } from '../../../environments/environment';
import { HTTP_ERRORES_CODIGO } from './http-codigo-error';
//import { Observable } from 'rxjs';
import { NotificationService } from "../services/notification.service";

@Injectable({
  providedIn: 'root',
})
export class ManejadorError implements ErrorHandler {
  constructor(private injector: Injector) { }


  handleError(error: string | Error): void {
    const notifier = this.injector.get(NotificationService);
    const mensajeError = this.mensajePorDefecto(error);;
    notifier.showError(mensajeError);
  }

  private mensajePorDefecto(error) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET;
      }
      if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {
        return error.error.error;
      }
      if (error.hasOwnProperty('status') && error.error.hasOwnProperty('mensaje')) {
        return error.error.mensaje;
      }
    }
    return error;
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA;
    }
    return HTTP_ERRORES_CODIGO[httpCode];
  }
}
