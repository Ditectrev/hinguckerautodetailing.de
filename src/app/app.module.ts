import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';

import {appRoutes} from './routes';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { TeamComponent } from './team/team.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CtaComponent } from './cta/cta.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {ImageFilterPipe} from './shared/filter.pipe';
import {ImageService} from './shared/image.service';


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
    TestimonialsComponent,
    CtaComponent,
    ContactComponent,
    ServicesComponent,
    NewsletterComponent,
    FooterComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
