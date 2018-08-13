import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {SpecialOfferComponent} from './services/special-offer/special-offer.component';
import {DoorToDoorComponent} from './services/door-to-door/door-to-door.component';
import {DetaillingInteriorStandardComponent} from './services/detailling-interior-standard/detailling-interior-standard.component';
import {DetaillingInteriorLuxComponent} from './services/detailling-interior-lux/detailling-interior-lux.component';
import {OzonationComponent} from './services/ozonation/ozonation.component';
import {HerbstWinterStandardComponent} from './services/herbst-winter-standard/herbst-winter-standard.component';
import {HerbstWinterExclusiveComponent} from './services/herbst-winter-exclusive/herbst-winter-exclusive.component';
import {LeatherCleaningComponent} from './services/leather-cleaning/leather-cleaning.component';
import {ConvertibleRoofsProtectionComponent} from './services/convertible-roofs-protection/convertible-roofs-protection.component';
import {ConvertibleRoofsCleaningComponent} from './services/convertible-roofs-cleaning/convertible-roofs-cleaning.component';
import {LeatherPaintingComponent} from './services/leather-painting/leather-painting.component';
import {LeatherProtectionComponent} from './services/leather-protection/leather-protection.component';
import {LampsRepairComponent} from './services/lamps-repair/lamps-repair.component';
import {PaintProtectionWaxComponent} from './services/paint-protection-wax/paint-protection-wax.component';
import {PaintRepairComponent} from './services/paint-repair/paint-repair.component';
import {PaintProtectionQuartzComponent} from './services/paint-protection-quartz/paint-protection-quartz.component';
import {PaintProtectionCeramicsComponent} from './services/paint-protection-ceramics/paint-protection-ceramics.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'page1' } },
  { path: 'uber-uns', component: AboutComponent, data: { animation: 'page2' } },
  { path: 'dienstleistungen', component: ServicesComponent, data: { animation: 'page3' } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'page4' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page5' } },
  { path: 'sonderangebot', component: SpecialOfferComponent, data: { animation: 'page6' } },
  { path: 'door-to-door', component: DoorToDoorComponent, data: { animation: 'page7' } },
  { path: 'detailling-des-innenraumes-standard', component: DetaillingInteriorStandardComponent, data: { animation: 'page8' } },
  { path: 'detailling-des-innenraumes-lux', component: DetaillingInteriorLuxComponent, data: { animation: 'page10' } },
  { path: 'ozonierung', component: OzonationComponent, data: { animation: 'page11' } },
  { path: 'herbst-winter-standardpaket', component: HerbstWinterStandardComponent, data: { animation: 'page12' } },
  { path: 'herbst-winter-exklusivpaket', component: HerbstWinterExclusiveComponent, data: { animation: 'page13' } },
  { path: 'leder-reinigung', component: LeatherCleaningComponent, data: { animation: 'page14' } },
  { path: 'cabriodacher-schutz', component: ConvertibleRoofsProtectionComponent, data: { animation: 'page15' } },
  { path: 'cabriodacher-reinigung', component: ConvertibleRoofsCleaningComponent, data: { animation: 'page16' } },
  { path: 'malen-von-leder', component: LeatherPaintingComponent, data: { animation: 'page17' } },
  { path: 'schutz-des-leders', component: LeatherProtectionComponent, data: { animation: 'page18' } },
  { path: 'instandsetzung-der-lampen', component: LampsRepairComponent, data: { animation: 'page19' } },
  { path: 'lackschutz-wachs', component: PaintProtectionWaxComponent, data: { animation: 'page20' } },
  { path: 'instandsetzung-des-lackes', component: PaintRepairComponent, data: { animation: 'page21' } },
  { path: 'lackschutz-quarzbeschichtung', component: PaintProtectionQuartzComponent, data: { animation: 'page22' } },
  { path: 'lackschutz-keramik', component: PaintProtectionCeramicsComponent, data: { animation: 'page23' } }
];
