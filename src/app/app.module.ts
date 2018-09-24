import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';

import {appRoutes} from './routes';
import {SliderComponent} from './slider/slider.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CtaComponent} from './cta/cta.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {FooterComponent} from './footer/footer.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {ImageFilterPipe} from './shared/filter.pipe';
import {ImageService} from './shared/image.service';
import {HomeComponent} from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {MomentModule} from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoorToDoorComponent } from './services/door-to-door/door-to-door.component';
import { DetaillingInteriorStandardComponent } from './services/detailling-interior-standard/detailling-interior-standard.component';
import { DetaillingInteriorLuxComponent } from './services/detailling-interior-lux/detailling-interior-lux.component';
import { OzonationComponent } from './services/ozonation/ozonation.component';
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
import {MailService} from './shared/mail.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AudiR8Component } from './portfolio/audi-r8/audi-r8.component';
import { AudiS8V8TComponent } from './portfolio/audi-s8-v8-t/audi-s8-v8-t.component';
import { AudiSq5Component } from './portfolio/audi-sq5/audi-sq5.component';
import { AudiTtRsComponent } from './portfolio/audi-tt-rs/audi-tt-rs.component';
import { Bmw330ciE46Component } from './portfolio/bmw-330ci-e46/bmw-330ci-e46.component';
import { BmwGtComponent } from './portfolio/bmw-gt/bmw-gt.component';
import { CamperComponent } from './portfolio/camper/camper.component';
import { CitroenDsCabrioComponent } from './portfolio/citroen-ds-cabrio/citroen-ds-cabrio.component';
import { CorvetteZ06Component } from './portfolio/corvette-z06/corvette-z06.component';
import { Ferrari612ScagliettiComponent } from './portfolio/ferrari-612-scaglietti/ferrari-612-scaglietti.component';
import { FlugzeugComponent } from './portfolio/flugzeug/flugzeug.component';
import { FordFiestaMk4Component } from './portfolio/ford-fiesta-mk4/ford-fiesta-mk4.component';
import { FordMustangVCoupeComponent } from './portfolio/ford-mustang-v-coupe/ford-mustang-v-coupe.component';
import { GolfIvGtiComponent } from './portfolio/golf-iv-gti/golf-iv-gti.component';
import { InfinitiQx70sComponent } from './portfolio/infiniti-qx70s/infiniti-qx70s.component';
import { JaguarETypeV121973Component } from './portfolio/jaguar-e-type-v12-1973/jaguar-e-type-v12-1973.component';
import { JaguarXj6Component } from './portfolio/jaguar-xj6/jaguar-xj6.component';
import { KawasakiZx10rNinjaComponent } from './portfolio/kawasaki-zx10r-ninja/kawasaki-zx10r-ninja.component';
import { KiaCeedGtComponent } from './portfolio/kia-ceed-gt/kia-ceed-gt.component';
import { LamborghiniGallardoLp5704PerformanteComponent } from './portfolio/lamborghini-gallardo-lp-570-4-performante/lamborghini-gallardo-lp-570-4-performante.component';
import { LkwGrundlicheReinigungDesInnenraumsComponent } from './portfolio/lkw-grundliche-reinigung-des-innenraums/lkw-grundliche-reinigung-des-innenraums.component';
import { MaseratiGranturismo2007Component } from './portfolio/maserati-granturismo-2007/maserati-granturismo-2007.component';
import { MercedesC63sAmgComponent } from './portfolio/mercedes-c-63s-amg/mercedes-c-63s-amg.component';
import { MercedesG63AmgComponent } from './portfolio/mercedes-g63-amg/mercedes-g63-amg.component';
import { MercedesSprinterComponent } from './portfolio/mercedes-sprinter/mercedes-sprinter.component';
import { MercedesVitoComponent } from './portfolio/mercedes-vito/mercedes-vito.component';
import { MercedesW111220sebCoupe1965Component } from './portfolio/mercedes-w111-220seb-coupe-1965/mercedes-w111-220seb-coupe-1965.component';
import { OpelZafiraComponent } from './portfolio/opel-zafira/opel-zafira.component';
import { Porsche944Component } from './portfolio/porsche-944/porsche-944.component';
import { RangeRoverComponent } from './portfolio/range-rover/range-rover.component';
import { RangeRoverSuperchargedAutobiographyComponent } from './portfolio/range-rover-supercharged-autobiography/range-rover-supercharged-autobiography.component';
import { RollsRoyceCornicheIvComponent } from './portfolio/rolls-royce-corniche-iv/rolls-royce-corniche-iv.component';
import { SkodaFabiaComponent } from './portfolio/skoda-fabia/skoda-fabia.component';
import { TeslaModelS85Component } from './portfolio/tesla-model-s-85/tesla-model-s-85.component';
import { TeslaXComponent } from './portfolio/tesla-x/tesla-x.component';
import { VolvoXc90Component } from './portfolio/volvo-xc90/volvo-xc90.component';
import { VwKafer1965Component } from './portfolio/vw-kafer-1965/vw-kafer-1965.component';
import { VwMultivanBlackWhiteComponent } from './portfolio/vw-multivan-black-white/vw-multivan-black-white.component';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    TeamComponent,
    ReviewsComponent,
    PortfolioComponent,
    CtaComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    ImageFilterPipe,
    HomeComponent,
    DoorToDoorComponent,
    DetaillingInteriorStandardComponent,
    DetaillingInteriorLuxComponent,
    OzonationComponent,
    LeatherCleaningComponent,
    ConvertibleRoofsProtectionComponent,
    ConvertibleRoofsCleaningComponent,
    LeatherPaintingComponent,
    LeatherProtectionComponent,
    LampsRepairComponent,
    PaintProtectionWaxComponent,
    PaintRepairComponent,
    PaintProtectionQuartzComponent,
    PaintProtectionCeramicsComponent,
    ErrorPageComponent,
    AudiR8Component,
    AudiS8V8TComponent,
    AudiSq5Component,
    AudiTtRsComponent,
    Bmw330ciE46Component,
    BmwGtComponent,
    CamperComponent,
    CitroenDsCabrioComponent,
    CorvetteZ06Component,
    Ferrari612ScagliettiComponent,
    FlugzeugComponent,
    FordFiestaMk4Component,
    FordMustangVCoupeComponent,
    GolfIvGtiComponent,
    InfinitiQx70sComponent,
    JaguarETypeV121973Component,
    JaguarXj6Component,
    KawasakiZx10rNinjaComponent,
    KiaCeedGtComponent,
    LamborghiniGallardoLp5704PerformanteComponent,
    LkwGrundlicheReinigungDesInnenraumsComponent,
    MaseratiGranturismo2007Component,
    MercedesC63sAmgComponent,
    MercedesG63AmgComponent,
    MercedesSprinterComponent,
    MercedesVitoComponent,
    MercedesW111220sebCoupe1965Component,
    OpelZafiraComponent,
    Porsche944Component,
    RangeRoverComponent,
    RangeRoverSuperchargedAutobiographyComponent,
    RollsRoyceCornicheIvComponent,
    SkodaFabiaComponent,
    TeslaModelS85Component,
    TeslaXComponent,
    VolvoXc90Component,
    VwKafer1965Component,
    VwMultivanBlackWhiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1gJCgbtpBYbzD6IdFcUOpw7Iwg88RUzs'
    })
  ],
  providers: [ImageService, ImageFilterPipe, MailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
