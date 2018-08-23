import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-convertible-roofs-cleaning',
  templateUrl: './convertible-roofs-cleaning.component.html',
  styleUrls: ['./convertible-roofs-cleaning.component.scss']
})
export class ConvertibleRoofsCleaningComponent implements OnInit {
// Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '800px',
        width: '800px',
        imageSwipe: true,
        lazyLoading: true
      },
      {
        breakpoint: 991,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/services/convertible-roofs-cleaning1.jpg',
        medium: 'assets/images/services/convertible-roofs-cleaning1.jpg',
        big: 'assets/images/services/convertible-roofs-cleaning1.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-cleaning2.jpg',
        medium: 'assets/images/services/convertible-roofs-cleaning2.jpg',
        big: 'assets/images/services/convertible-roofs-cleaning2.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-cleaning3.jpg',
        medium: 'assets/images/services/convertible-roofs-cleaning3.jpg',
        big: 'assets/images/services/convertible-roofs-cleaning3.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-cleaning4.jpg',
        medium: 'assets/images/services/convertible-roofs-cleaning4.jpg',
        big: 'assets/images/services/convertible-roofs-cleaning4.jpg'
      }
    ];
  }
}
