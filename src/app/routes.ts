import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'page1' } },
  { path: 'uber-uns', component: AboutComponent, data: { animation: 'page2' } },
  { path: 'dienstleistungen', component: ServicesComponent, data: { animation: 'page3' } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'page4' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page5' } }
];
