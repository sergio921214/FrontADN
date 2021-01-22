import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { AutoPage } from '../page/auto/auto.po';
import { browser } from 'protractor';


describe(' Auto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let auto: AutoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        auto = new AutoPage();
    });

    it('Deberia crear auto', async () => {
        const PLACA = 'JJJ212';
        const TIPO_COMBUSTIBLE = 'GASOLINA';
        const PRECIO_POR_DIA = 20000;
        const MULTIPLICADOR_FIN_SEMANA = 3;

        page.navigateTo();
        navBar.clickBotonAuto();
        auto.clickBotonCrearAutos();
        auto.ingresarPlaca(PLACA);
        auto.clickBotonTipoCombustible();
        auto.ingresarTipoCombustible(TIPO_COMBUSTIBLE);
        auto.ingresarPrecioPorDia(PRECIO_POR_DIA);
        auto.ingresarMultiplicadorFinSemana(MULTIPLICADOR_FIN_SEMANA);
        auto.clickBotonGuardarAuto();
        
        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/auto')
    });

    it('Deberia listar autos', async() => {
        page.navigateTo();
        navBar.clickBotonAuto();
        auto.clickBotonListarAutos();
        expect(1).toEqual(auto.countAutos());
    });

    it('Deberia listar autos disponibles', async() => {
        page.navigateTo();
        navBar.clickBotonAuto();
        auto.clickBotonListarAutosDisponibles();

        expect(1).toBe(auto.countAutosDisponibles());
    }); 

    it('Deberia listar autos rentados', async() => {
        page.navigateTo();
        navBar.clickBotonAuto();
        auto.clickBotonListarAutosRentados();

        expect(0).toBe(auto.countAutosRentados());
    }); 
});
