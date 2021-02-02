export class Auto {
    placa: string;
    tipoCombustible: string;
    precioPorDia: number;
    multiplicadorFinSemana: number;

    constructor(placa: string, tipoCombustible: string, precioPorDia: number, multiplicadorFinSemana: number) {
        this.placa = placa;
        this.tipoCombustible = tipoCombustible;
        this.precioPorDia = precioPorDia;
        this.multiplicadorFinSemana = multiplicadorFinSemana;
    }
}
