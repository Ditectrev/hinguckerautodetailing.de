import { Component } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent {
  servicesRoutes = [
    {
      url: "/lackkorrektur-polieren",
      name: "Lackkorrektur (Polieren)",
      image: "assets/images/services/paint-repair1.jpg"
    },
    {
      url: "/lackschutz-wachs",
      name: "Lackschutz - Wachs",
      image: "assets/images/services/paint-protection-wax1.jpg"
    },
    {
      url: "/lackschutz-quarzbeschichtung",
      name: "Lackschutz - Quarzbeschichtung",
      image: "assets/images/services/paint-protection-quartz1.jpg"
    },
    {
      url: "/lackschutz-keramik",
      name: "Lackschutz - Keramik",
      image: "assets/images/services/paint-protection-ceramics1.jpg"
    },
    {
      url: "/detailling-des-innenraumes-standard",
      name: "Detailling des Innenraumes Standard",
      image: "assets/images/services/detailling-interior-standard1.jpg"
    },
    {
      url: "/detailling-des-innenraumes-lux",
      name: "Detailling des Innenraumes Lux",
      image: "assets/images/services/detailling-interior-lux1.jpg"
    },
    {
      url: "/reinigung-des-leders",
      name: "Reinigung des Leders",
      image: "assets/images/services/leather-cleaning1.jpg"
    },
    {
      url: "/schutz-des-leders",
      name: "Schutz des Leders",
      image: "assets/images/services/leather-protection1.jpg"
    },
    {
      url: "/malen-leders",
      name: "Malen Leders",
      image: "assets/images/services/leather-painting1.jpg"
    },
    {
      url: "/ozonierung",
      name: "Ozonierung",
      image: "assets/images/services/ozonation.jpg"
    },
    {
      url: "/cabriodacher-reinigung",
      name: "Cabriodächer Reinigung",
      image: "assets/images/services/convertible-roofs-cleaning1.jpg"
    },
    {
      url: "/cabriodacher-schutz",
      name: "Cabriodächer Schutz",
      image: "assets/images/services/convertible-roofs-protection1.jpg"
    },
    {
      url: "/instandsetzung-der-lampen",
      name: "Instandsetzung der Lampen",
      image: "assets/images/services/lamps1.jpg"
    },
    {
      url: "/door-to-door",
      name: "Door to door",
      image: "assets/images/services/door-to-door1.jpg"
    },
    {
      url: "/reifen-und-radwechsel",
      name: "Reifen- und Radwechsel",
      image: "assets/images/services/tire-and-wheel-change1.jpg"
    },
    {
      url: "/schutzfolie",
      name: "Schutzfolie",
      image: "assets/images/services/foil-protection1.jpg"
    }
  ];
}
