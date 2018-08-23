import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-convertible-roofs-protection',
  templateUrl: './convertible-roofs-protection.component.html',
  styleUrls: ['./convertible-roofs-protection.component.scss']
})
export class ConvertibleRoofsProtectionComponent implements OnInit {
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
        small: 'assets/images/services/convertible-roofs-protection1.jpg',
        medium: 'assets/images/services/convertible-roofs-protection1.jpg',
        big: 'assets/images/services/convertible-roofs-protection1.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-protection2.jpg',
        medium: 'assets/images/services/convertible-roofs-protection2.jpg',
        big: 'assets/images/services/convertible-roofs-protection2.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-protection3.jpg',
        medium: 'assets/images/services/convertible-roofs-protection3.jpg',
        big: 'assets/images/services/convertible-roofs-protection3.jpg'
      },
      {
        small: 'assets/images/services/convertible-roofs-protection4.jpg',
        medium: 'assets/images/services/convertible-roofs-protection4.jpg',
        big: 'assets/images/services/convertible-roofs-protection4.jpg'
      }
    ];
  }
}
