import { Routes } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { DoorToDoorComponent } from "./services/door-to-door/door-to-door.component";
import { DetaillingInteriorStandardComponent } from "./services/detailling-interior-standard/detailling-interior-standard.component";
import { DetaillingInteriorLuxComponent } from "./services/detailling-interior-lux/detailling-interior-lux.component";
import { OzonationComponent } from "./services/ozonation/ozonation.component";
import { LeatherCleaningComponent } from "./services/leather-cleaning/leather-cleaning.component";
import { ConvertibleRoofsProtectionComponent } from "./services/convertible-roofs-protection/convertible-roofs-protection.component";
import { ConvertibleRoofsCleaningComponent } from "./services/convertible-roofs-cleaning/convertible-roofs-cleaning.component";
import { LeatherPaintingComponent } from "./services/leather-painting/leather-painting.component";
import { LeatherProtectionComponent } from "./services/leather-protection/leather-protection.component";
import { LampsRepairComponent } from "./services/lamps-repair/lamps-repair.component";
import { PaintProtectionWaxComponent } from "./services/paint-protection-wax/paint-protection-wax.component";
import { PaintRepairComponent } from "./services/paint-repair/paint-repair.component";
import { PaintProtectionQuartzComponent } from "./services/paint-protection-quartz/paint-protection-quartz.component";
import { PaintProtectionCeramicsComponent } from "./services/paint-protection-ceramics/paint-protection-ceramics.component";
import { TireAndWheelChangeComponent } from "./services/tire-and-wheel-change/tire-and-wheel-change.component";
import { FoilProtectionComponent } from "./services/foil-protection/foil-protection.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { AudiR8Component } from "./portfolio/audi-r8/audi-r8.component";
import { AudiS8V8TComponent } from "./portfolio/audi-s8-v8-t/audi-s8-v8-t.component";
import { AudiSq5Component } from "./portfolio/audi-sq5/audi-sq5.component";
import { AudiTtRsComponent } from "./portfolio/audi-tt-rs/audi-tt-rs.component";
import { Bmw330ciE46Component } from "./portfolio/bmw-330ci-e46/bmw-330ci-e46.component";
import { BmwGtComponent } from "./portfolio/bmw-gt/bmw-gt.component";
import { CamperComponent } from "./portfolio/camper/camper.component";
import { CitroenDsCabrioComponent } from "./portfolio/citroen-ds-cabrio/citroen-ds-cabrio.component";
import { CorvetteZ06Component } from "./portfolio/corvette-z06/corvette-z06.component";
import { Ferrari612ScagliettiComponent } from "./portfolio/ferrari-612-scaglietti/ferrari-612-scaglietti.component";
import { FlugzeugComponent } from "./portfolio/flugzeug/flugzeug.component";
import { FordFiestaMk4Component } from "./portfolio/ford-fiesta-mk4/ford-fiesta-mk4.component";
import { FordMustangVCoupeComponent } from "./portfolio/ford-mustang-v-coupe/ford-mustang-v-coupe.component";
import { GolfIvGtiComponent } from "./portfolio/golf-iv-gti/golf-iv-gti.component";
import { InfinitiQx70sComponent } from "./portfolio/infiniti-qx70s/infiniti-qx70s.component";
import { JaguarETypeV121973Component } from "./portfolio/jaguar-e-type-v12-1973/jaguar-e-type-v12-1973.component";
import { JaguarXj6Component } from "./portfolio/jaguar-xj6/jaguar-xj6.component";
import { KawasakiZx10rNinjaComponent } from "./portfolio/kawasaki-zx10r-ninja/kawasaki-zx10r-ninja.component";
import { KiaCeedGtComponent } from "./portfolio/kia-ceed-gt/kia-ceed-gt.component";
import { LamborghiniGallardoLp5704PerformanteComponent } from "./portfolio/lamborghini-gallardo-lp-570-4-performante/lamborghini-gallardo-lp-570-4-performante.component";
import { MaseratiGranturismo2007Component } from "./portfolio/maserati-granturismo-2007/maserati-granturismo-2007.component";
import { MercedesC63sAmgComponent } from "./portfolio/mercedes-c-63s-amg/mercedes-c-63s-amg.component";
import { MercedesG63AmgComponent } from "./portfolio/mercedes-g63-amg/mercedes-g63-amg.component";
import { MercedesSprinterComponent } from "./portfolio/mercedes-sprinter/mercedes-sprinter.component";
import { MercedesVitoComponent } from "./portfolio/mercedes-vito/mercedes-vito.component";
import { MercedesW111220sebCoupe1965Component } from "./portfolio/mercedes-w111-220seb-coupe-1965/mercedes-w111-220seb-coupe-1965.component";
import { OpelZafiraComponent } from "./portfolio/opel-zafira/opel-zafira.component";
import { Porsche944Component } from "./portfolio/porsche-944/porsche-944.component";
import { RangeRoverComponent } from "./portfolio/range-rover/range-rover.component";
import { RangeRoverSuperchargedAutobiographyComponent } from "./portfolio/range-rover-supercharged-autobiography/range-rover-supercharged-autobiography.component";
import { RollsRoyceCornicheIvComponent } from "./portfolio/rolls-royce-corniche-iv/rolls-royce-corniche-iv.component";
import { SkodaFabiaComponent } from "./portfolio/skoda-fabia/skoda-fabia.component";
import { TeslaModelS85Component } from "./portfolio/tesla-model-s-85/tesla-model-s-85.component";
import { TeslaXComponent } from "./portfolio/tesla-x/tesla-x.component";
import { VolvoXc90Component } from "./portfolio/volvo-xc90/volvo-xc90.component";
import { VwKafer1965Component } from "./portfolio/vw-kafer-1965/vw-kafer-1965.component";
import { VwMultivanBlackWhiteComponent } from "./portfolio/vw-multivan-black-white/vw-multivan-black-white.component";
import { LkwGrundlicheReinigungDesInnenraumsComponent } from "./portfolio/lkw-grundliche-reinigung-des-innenraums/lkw-grundliche-reinigung-des-innenraums.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "page1" } },
  {
    path: "dienstleistungen",
    component: ServicesComponent,
    data: { animation: "page2" }
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    data: { animation: "page3" }
  },
  {
    path: "kontakt",
    component: ContactComponent,
    data: { animation: "page4" }
  },
  {
    path: "door-to-door",
    component: DoorToDoorComponent,
    data: { animation: "page5" }
  },
  {
    path: "detailling-des-innenraumes-standard",
    component: DetaillingInteriorStandardComponent,
    data: { animation: "page6" }
  },
  {
    path: "detailling-des-innenraumes-lux",
    component: DetaillingInteriorLuxComponent,
    data: { animation: "page7" }
  },
  {
    path: "ozonierung",
    component: OzonationComponent,
    data: { animation: "page8" }
  },
  {
    path: "reinigung-des-leders",
    component: LeatherCleaningComponent,
    data: { animation: "page9" }
  },
  {
    path: "cabriodacher-schutz",
    component: ConvertibleRoofsProtectionComponent,
    data: { animation: "page10" }
  },
  {
    path: "cabriodacher-reinigung",
    component: ConvertibleRoofsCleaningComponent,
    data: { animation: "page11" }
  },
  {
    path: "malen-leders",
    component: LeatherPaintingComponent,
    data: { animation: "page12" }
  },
  {
    path: "schutz-des-leders",
    component: LeatherProtectionComponent,
    data: { animation: "page13" }
  },
  {
    path: "instandsetzung-der-lampen",
    component: LampsRepairComponent,
    data: { animation: "page14" }
  },
  {
    path: "lackschutz-wachs",
    component: PaintProtectionWaxComponent,
    data: { animation: "page15" }
  },
  {
    path: "instandsetzung-des-lackes",
    component: PaintRepairComponent,
    data: { animation: "page16" }
  },
  {
    path: "lackschutz-quarzbeschichtung",
    component: PaintProtectionQuartzComponent,
    data: { animation: "page17" }
  },
  {
    path: "lackschutz-keramik",
    component: PaintProtectionCeramicsComponent,
    data: { animation: "page18" }
  },
  {
    path: "reifen-und-radwechsel",
    component: TireAndWheelChangeComponent,
    data: { animation: "page19" }
  },
  {
    path: "schutzfolie",
    component: FoilProtectionComponent,
    data: { animation: "page20" }
  },
  {
    path: "nicht-gefunden",
    component: ErrorPageComponent,
    data: { animation: "page21" }
  },
  // Gallery routes.
  {
    path: "portfolio/audi-r8",
    component: AudiR8Component,
    data: { animation: "page20" }
  },
  {
    path: "portfolio/audi-s8-v8-t",
    component: AudiS8V8TComponent,
    data: { animation: "page21" }
  },
  {
    path: "portfolio/audi-sq5",
    component: AudiSq5Component,
    data: { animation: "page22" }
  },
  {
    path: "portfolio/audi-tt-rs",
    component: AudiTtRsComponent,
    data: { animation: "page23" }
  },
  {
    path: "portfolio/bmw-330ci-e46",
    component: Bmw330ciE46Component,
    data: { animation: "page24" }
  },
  {
    path: "portfolio/bmw-gt",
    component: BmwGtComponent,
    data: { animation: "page25" }
  },
  {
    path: "portfolio/camper",
    component: CamperComponent,
    data: { animation: "page26" }
  },
  {
    path: "portfolio/citroen-ds-cabrio",
    component: CitroenDsCabrioComponent,
    data: { animation: "page27" }
  },
  {
    path: "portfolio/corvette-z06",
    component: CorvetteZ06Component,
    data: { animation: "page28" }
  },
  {
    path: "portfolio/ferrari-612-scaglietti",
    component: Ferrari612ScagliettiComponent,
    data: { animation: "page29" }
  },
  {
    path: "portfolio/flugzeug",
    component: FlugzeugComponent,
    data: { animation: "page30" }
  },
  {
    path: "portfolio/ford-fiesta-mk4",
    component: FordFiestaMk4Component,
    data: { animation: "page31" }
  },
  {
    path: "portfolio/ford-mustang-v-coupe",
    component: FordMustangVCoupeComponent,
    data: { animation: "page32" }
  },
  {
    path: "portfolio/golf-iv-gti",
    component: GolfIvGtiComponent,
    data: { animation: "page33" }
  },
  {
    path: "portfolio/infiniti-qx70s",
    component: InfinitiQx70sComponent,
    data: { animation: "page34" }
  },
  {
    path: "portfolio/jaguar-e-type-v12-1973",
    component: JaguarETypeV121973Component,
    data: { animation: "page35" }
  },
  {
    path: "portfolio/jaguar-xj6",
    component: JaguarXj6Component,
    data: { animation: "page36" }
  },
  {
    path: "portfolio/kawasaki-zx10r-ninja",
    component: KawasakiZx10rNinjaComponent,
    data: { animation: "page37" }
  },
  {
    path: "portfolio/kia-ceed-gt",
    component: KiaCeedGtComponent,
    data: { animation: "page38" }
  },
  {
    path: "portfolio/lamborghini-gallardo-lp-570-4-performante",
    component: LamborghiniGallardoLp5704PerformanteComponent,
    data: { animation: "page39" }
  },
  {
    path: "portfolio/lkw-grundliche-reinigung-des-innenraums",
    component: LkwGrundlicheReinigungDesInnenraumsComponent,
    data: { animation: "page40" }
  },
  {
    path: "portfolio/maserati-granturismo-2007",
    component: MaseratiGranturismo2007Component,
    data: { animation: "page41" }
  },
  {
    path: "portfolio/mercedes-c-63s-amg",
    component: MercedesC63sAmgComponent,
    data: { animation: "page42" }
  },
  {
    path: "portfolio/mercedes-g63-amg",
    component: MercedesG63AmgComponent,
    data: { animation: "page43" }
  },
  {
    path: "portfolio/mercedes-sprinter",
    component: MercedesSprinterComponent,
    data: { animation: "page44" }
  },
  {
    path: "portfolio/mercedes-vito",
    component: MercedesVitoComponent,
    data: { animation: "page45" }
  },
  {
    path: "portfolio/mercedes-w111-220seb-coupe-1965",
    component: MercedesW111220sebCoupe1965Component,
    data: { animation: "page46" }
  },
  {
    path: "portfolio/opel-zafira",
    component: OpelZafiraComponent,
    data: { animation: "page47" }
  },
  {
    path: "portfolio/porsche-944",
    component: Porsche944Component,
    data: { animation: "page48" }
  },
  {
    path: "portfolio/range-rover",
    component: RangeRoverComponent,
    data: { animation: "page49" }
  },
  {
    path: "portfolio/range-rover-supercharged-autobiography",
    component: RangeRoverSuperchargedAutobiographyComponent,
    data: { animation: "page50" }
  },
  {
    path: "portfolio/rolls-royce-corniche-iv",
    component: RollsRoyceCornicheIvComponent,
    data: { animation: "page51" }
  },
  {
    path: "portfolio/skoda-fabia",
    component: SkodaFabiaComponent,
    data: { animation: "page52" }
  },
  {
    path: "portfolio/tesla-model-s-85",
    component: TeslaModelS85Component,
    data: { animation: "page53" }
  },
  {
    path: "portfolio/tesla-x",
    component: TeslaXComponent,
    data: { animation: "page54" }
  },
  {
    path: "portfolio/volvo-xc90",
    component: VolvoXc90Component,
    data: { animation: "page55" }
  },
  {
    path: "portfolio/vw-kafer-1965",
    component: VwKafer1965Component,
    data: { animation: "page56" }
  },
  {
    path: "portfolio/vw-multivan-black-white",
    component: VwMultivanBlackWhiteComponent,
    data: { animation: "page57" }
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: "**", // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: "/nicht-gefunden" // Alternative to component in routes, which redirects to specific path.
  }
];
