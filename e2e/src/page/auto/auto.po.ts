import { by, element } from 'protractor';

export class AutoPage {
    private linkCrearAuto = element(by.id('id_boton_crear'));
    private linkListarAutos = element(by.id('id_boton_listar'));
    private linkListarAutosDisponibles = element(by.id('id_boton_listar_disponibles'));
    private linkListarAutosRentados = element(by.id('id_boton_listar_rentados'));
    private linkTipocombustible = element(by.id('field_tipoCombustible'));
    private linkGuardarAuto = element(by.id('boton_guardar'));
    private inputPlaca = element(by.id('input_placa'));
    private inputTipoCombustible = element(by.id('field_tipoCombustible'));
    private inputPrecioPorDia = element(by.id('input_precio_por_dia'));
    private inputMultiplicadorFinSemana = element(by.id('input_multiplicador_fin_semana'));
    private trAutos = element.all(by.id('tr_autos'));
    private trAutosDisponibles = element.all(by.id('tr_autos_disponibles'));
    private trAutosRentados = element.all(by.id('tr_autos_rentados'));

    countAutos() {
        return this.trAutos.count();
    }

    countAutosDisponibles() {
        return this.trAutosDisponibles.count();
    }

    countAutosRentados() {
        return this.trAutosRentados.count();
    }

    async clickBotonCrearAutos() {
        await this.linkCrearAuto.click();
    }

    async clickBotonListarAutos() {
        await this.linkListarAutos.click();
    }

    async clickBotonListarAutosDisponibles() {
        await this.linkListarAutosDisponibles.click();
    }

    async clickBotonListarAutosRentados() {
        await this.linkListarAutosRentados.click();
    }

    async clickBotonTipoCombustible() {
        await this.linkTipocombustible.click();
    }

    async clickBotonGuardarAuto() {
        await this.linkGuardarAuto.click();
    }

    async ingresarPlaca(placa) {
        await this.inputPlaca.sendKeys(placa);
    }

    async ingresarTipoCombustible(tipoCombustible) {
        await this.inputTipoCombustible.sendKeys(tipoCombustible);
    }

    async ingresarPrecioPorDia(precioPorDia) {
        await this.inputPrecioPorDia.sendKeys(precioPorDia);
    }

    async ingresarMultiplicadorFinSemana(multiplicadorFinSemana) {
        await this.inputMultiplicadorFinSemana.sendKeys(multiplicadorFinSemana);
    }
}
