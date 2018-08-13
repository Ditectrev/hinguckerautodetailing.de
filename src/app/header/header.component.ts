import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mainRoutes = [
    { 'url': '/uber-uns', 'name': 'Über Uns' },
    { 'url': '/dienstleistungen', 'name': 'Dienstleistungen' },

    { 'url': '/lackschutz-keramik', 'name': 'Lackschutz Keramik' },

    { 'url': '/portfolio', 'name': 'Portfolio' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
  // TODO: Add subroutes to services.
  servicesRoutes = [
    { 'url': '/sonderangebot', 'name': 'Sonderangebot' },
    { 'url': '/door-to-door', 'name': 'Door to door' },
    { 'url': '/detailling-des-innenraumes-standard', 'name': 'Detailling des Innenraumes Standard' },
    { 'url': '/detailling-des-innenraumes-lux', 'name': 'Detailling des Innenraumes Lux' },
    { 'url': '/ozonierung', 'name': 'Ozonierung' },
    { 'url': '/herbst-winter-standardpaket', 'name': 'Herbst/Winter Standardpaket' },
    { 'url': '/herbst-winter-exklusivpaket', 'name': 'Herbst/Winter Exklusivpaket' },
    { 'url': '/leder-reinigung', 'name': 'Leder Reinigung' },
    { 'url': '/cabriodacher-schutz', 'name': 'Cabriodächer Schutz' },
    { 'url': '/cabriodacher-reinigung', 'name': 'Cabriodächer Reinigung' },
    { 'url': '/malen-von-leder', 'name': 'Malen von Leder' },
    { 'url': '/schutz-des-leders', 'name': 'Schutz des Leders' },
    { 'url': '/instandsetzung-der-lampen', 'name': 'Instandsetzung der Lampen' },
    { 'url': '/lackschutz-wachs', 'name': 'Lackschutz Wachs' },
    { 'url': '/instandsetzung-des-lackes', 'name': 'Instandsetzung des Lackes' },
    { 'url': '/lackschutz-quarzbeschichtung', 'name': 'Lackschutz Quarzbeschichtung' },
    { 'url': '/lackschutz-keramik', 'name': 'Lackschutz Keramik' }
  ];

  public isCollapsed = true;
}
