import { Component, OnInit } from "@angular/core";
import { NgxGalleryImage, NgxGalleryOptions } from "ngx-gallery";

@Component({
  selector: "app-foil-protection",
  templateUrl: "./foil-protection.component.html",
  styleUrls: ["./foil-protection.component.scss"]
})
export class FoilProtectionComponent implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: "200px",
        image: false,
        imageSwipe: true,
        width: "800px"
      },
      {
        breakpoint: 991,
        width: "100%"
      }
    ];

    this.galleryImages = [
      {
        small: "assets/images/services/foil-protection1.jpg",
        medium: "assets/images/services/foil-protection1.jpg",
        big: "assets/images/services/foil-protection1.jpg"
      },
      {
        small: "assets/images/services/foil-protection2.jpg",
        medium: "assets/images/services/foil-protection2.jpg",
        big: "assets/images/services/foil-protection2.jpg"
      },
      {
        small: "assets/images/services/foil-protection3.jpg",
        medium: "assets/images/services/foil-protection3.jpg",
        big: "assets/images/services/foil-protection3.jpg"
      },
      {
        small: "assets/images/services/foil-protection4.jpg",
        medium: "assets/images/services/foil-protection4.jpg",
        big: "assets/images/services/foil-protection4.jpg"
      }
    ];
  }
}
