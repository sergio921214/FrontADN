import { by, element } from 'protractor';

export class NavbarPage {
    linkAuto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkRentarAuto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    async clickBotonRentarAutos() {
        await this.linkRentarAuto.click();
    }

    async clickBotonAuto() {
        await this.linkAuto.click();
    }
}
