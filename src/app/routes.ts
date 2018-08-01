import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  // TODO: Add animations.
  { path: '', component: HomeComponent },
  { path: 'uber-uns', component: AboutComponent },
  { path: 'dienstleistungen', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'kontakt', component: ContactComponent }
];
