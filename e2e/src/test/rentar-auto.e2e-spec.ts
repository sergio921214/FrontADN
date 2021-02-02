import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { RentarAutoPage } from '../page/rentar-auto/rentar-auto.po';
import { browser } from 'protractor';


describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let rentarAuto: RentarAutoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        rentarAuto = new RentarAutoPage();
    });

    it('Deberia crear una renta de auto', async () => {
        const PLACA = 'JJJ212';
        const FECHA_RENTA = '2021-01-05';
        const FECHA_ENTREGA = '01/09/2021';


        page.navigateTo();
        navBar.clickBotonRentarAutos();
        rentarAuto.clickBotonRentarAuto();
        rentarAuto.clickInputPlaca();
        rentarAuto.ingresarPlaca(PLACA);
        rentarAuto.clickInputFechaRenta();
        rentarAuto.ingresarFechaRenta(FECHA_RENTA);
        rentarAuto.clickInputFechaEntrega();
        rentarAuto.ingresarFechaEntrega(FECHA_ENTREGA);
        rentarAuto.clickBotonCalcularRentaAuto();
        rentarAuto.clickBotonConfirmarRentaAuto();

        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/rentar-auto');


    });

    it('Deberia listar rentas de autos', async () => {
        page.navigateTo();
        navBar.clickBotonRentarAutos();
        rentarAuto.clickBotonListarRentasAuto();
        expect(1).toEqual(rentarAuto.countRentaAutos());
    });
});
