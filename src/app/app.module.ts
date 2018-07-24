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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
