import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';

import {appRoutes} from './routes';
import {SliderComponent} from './slider/slider.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {TeamComponent} from './team/team.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CtaComponent} from './cta/cta.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {FooterComponent} from './footer/footer.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ImageFilterPipe} from './shared/filter.pipe';
import {ImageService} from './shared/image.service';
import {HomeComponent} from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {MomentModule} from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpecialOfferComponent } from './services/special-offer/special-offer.component';
import { DoorToDoorComponent } from './services/door-to-door/door-to-door.component';
import { DetaillingInteriorStandardComponent } from './services/detailling-interior-standard/detailling-interior-standard.component';
import { DetaillingInteriorLuxComponent } from './services/detailling-interior-lux/detailling-interior-lux.component';
import { OzonationComponent } from './services/ozonation/ozonation.component';
import { HerbstWinterStandardComponent } from './services/herbst-winter-standard/herbst-winter-standard.component';
import { HerbstWinterExclusiveComponent } from './services/herbst-winter-exclusive/herbst-winter-exclusive.component';
import { LeatherCleaningComponent } from './services/leather-cleaning/leather-cleaning.component';
import { ConvertibleRoofsProtectionComponent } from './services/convertible-roofs-protection/convertible-roofs-protection.component';
import { ConvertibleRoofsCleaningComponent } from './services/convertible-roofs-cleaning/convertible-roofs-cleaning.component';
import { LeatherPaintingComponent } from './services/leather-painting/leather-painting.component';
import { LeatherProtectionComponent } from './services/leather-protection/leather-protection.component';
import { LampsRepairComponent } from './services/lamps-repair/lamps-repair.component';
import { PaintProtectionWaxComponent } from './services/paint-protection-wax/paint-protection-wax.component';
import { PaintRepairComponent } from './services/paint-repair/paint-repair.component';
import { PaintProtectionQuartzComponent } from './services/paint-protection-quartz/paint-protection-quartz.component';
import { PaintProtectionCeramicsComponent } from './services/paint-protection-ceramics/paint-protection-ceramics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    SkillsComponent,
    TeamComponent,
    ReviewsComponent,
    PortfolioComponent,
    CtaComponent,
    ContactComponent,
    ServicesComponent,
    NewsletterComponent,
    FooterComponent,
    ImageFilterPipe,
    HomeComponent,
    SpecialOfferComponent,
    DoorToDoorComponent,
    DetaillingInteriorStandardComponent,
    DetaillingInteriorLuxComponent,
    OzonationComponent,
    HerbstWinterStandardComponent,
    HerbstWinterExclusiveComponent,
    LeatherCleaningComponent,
    ConvertibleRoofsProtectionComponent,
    ConvertibleRoofsCleaningComponent,
    LeatherPaintingComponent,
    LeatherProtectionComponent,
    LampsRepairComponent,
    PaintProtectionWaxComponent,
    PaintRepairComponent,
    PaintProtectionQuartzComponent,
    PaintProtectionCeramicsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    MomentModule,
    NgbModule.forRoot(),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    RouterModule.forRoot(appRoutes),
    // TODO: Test it.
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1gJCgbtpBYbzD6IdFcUOpw7Iwg88RUzs'
    })
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
