import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  servicesRoutes = [
    { 'url': '/instandsetzung-des-lackes', 'name': 'Instandsetzung des Lackes', 'image': 'assets/images/services/paint-repair.jpg' },
    { 'url': '/lackschutz-wachs', 'name': 'Lackschutz - Wachs', 'image': 'assets/images/services/paint-protection.jpg' },
    { 'url': '/lackschutz-quarzbeschichtung', 'name': 'Lackschutz - Quarzbeschichtung', 'image': 'assets/images/services/paint-protection-quartz.jpg' },
    { 'url': '/lackschutz-keramik', 'name': 'Lackschutz - Keramik', 'image': 'assets/images/services/paint-protection-ceramics.jpg' },
    { 'url': '/detailling-des-innenraumes-standard', 'name': 'Detailling des Innenraumes Standard', 'image': 'assets/images/services/detailling-interior-standard.jpg' },
    { 'url': '/detailling-des-innenraumes-lux', 'name': 'Detailling des Innenraumes Lux', 'image': 'assets/images/services/detailling-interior-lux.jpg' },
    { 'url': '/reinigung-des-leders', 'name': 'Reinigung des Leders', 'image': 'assets/images/services/leather-cleaning.jpg' },
    { 'url': '/schutz-des-leders', 'name': 'Schutz des Leders', 'image': 'assets/images/services/leather-protection.jpg' },
    { 'url': '/malen-leders', 'name': 'Malen Leders', 'image': 'assets/images/services/leather-painting.jpg' },
    { 'url': '/ozonierung', 'name': 'Ozonierung', 'image': 'assets/images/services/ozonation.jpg' },
    { 'url': '/cabriodacher-reinigung', 'name': 'Cabriodächer Reinigung', 'image': 'assets/images/services/convertible-roofs-cleaning.jpg' },
    { 'url': '/cabriodacher-schutz', 'name': 'Cabriodächer Schutz', 'image': 'assets/images/services/convertible-roofs-protection.jpg' },
    { 'url': '/instandsetzung-der-lampen', 'name': 'Instandsetzung der Lampen', 'image': 'assets/images/services/lamps.jpg' },
    { 'url': '/door-to-door', 'name': 'Door to door', 'image': 'assets/images/services/door-to-door.jpg' }
  ];
}
