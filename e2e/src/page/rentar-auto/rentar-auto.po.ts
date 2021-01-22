import { by, element } from 'protractor';

export class RentarAutoPage {
    private linkRentarAuto = element(by.id('id_boton_rentar'));
    private linkListarRentaAutos = element(by.id('id_boton_listar'));
    private linkCalcularRentaAuto = element(by.id('boton_guardar'));
    private linkConfirmarRentaAuto = element(by.id('id_boton_confirmar_renta'));
    private linkFechaRenta = element(by.id('input_fecha_renta'));
    private linkFechaEntrega = element(by.id('input_fecha_entrega'));
    private linkPlaca = element(by.id('input_placa'));
    private trRentaAutos = element.all(by.id('tr_renta_autos'));

    countRentaAutos(){
        return this.trRentaAutos.count();
    }

    async clickBotonRentarAuto() {
        await this.linkRentarAuto.click();
    }

    async clickBotonListarRentasAuto() {
        await this.linkListarRentaAutos.click();
    }

    async clickBotonCalcularRentaAuto() {
        await this.linkCalcularRentaAuto.click();
    }

    async clickBotonConfirmarRentaAuto() {
        await this.linkConfirmarRentaAuto.click();
    }

    async clickInputFechaRenta() {
        await this.linkFechaRenta.click();
    }

    async clickInputFechaEntrega() {
        await this.linkFechaEntrega.click();
    }

    async clickInputPlaca() {
        await this.linkPlaca.click();
    }

    async ingresarPlaca(placa) {
        await this.linkPlaca.sendKeys(placa);
    }

    async ingresarFechaRenta(fechaRenta) {
        await this.linkFechaRenta.sendKeys(fechaRenta);
    }

    async ingresarFechaEntrega(fechaEntrega) {
        await this.linkFechaEntrega.sendKeys(fechaEntrega);
    }


}
