import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-leather-protection',
  templateUrl: './leather-protection.component.html',
  styleUrls: ['./leather-protection.component.scss']
})
export class LeatherProtectionComponent implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '200px',
        image: false,
        imageSwipe: true,
        width: '800px'
      },
      {
        breakpoint: 991,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/services/leather-protection1.jpg',
        medium: 'assets/images/services/leather-protection1.jpg',
        big: 'assets/images/services/leather-protection1.jpg'
      },
      {
        small: 'assets/images/services/leather-protection2.jpg',
        medium: 'assets/images/services/leather-protection2.jpg',
        big: 'assets/images/services/leather-protection2.jpg'
      },
      {
        small: 'assets/images/services/leather-protection2.jpg',
        medium: 'assets/images/services/leather-protection2.jpg',
        big: 'assets/images/services/leather-protection2.jpg'
      },
      {
        small: 'assets/images/services/leather-protection2.jpg',
        medium: 'assets/images/services/leather-protection2.jpg',
        big: 'assets/images/services/leather-protection2.jpg'
      }
    ];
  }
}
