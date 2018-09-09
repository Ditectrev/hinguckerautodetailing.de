import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-audi-sq5',
  templateUrl: './audi-sq5.component.html',
  styleUrls: ['./audi-sq5.component.scss']
})
export class AudiSq5Component implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '600px',
        image: false,
        imageSwipe: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewSwipe: true,
        previewZoom: true,
        thumbnailsRows: 3,
        thumbnailsSwipe: true,
        width: '800px'
      },
      {
        breakpoint: 991,
        image: true,
        thumbnailsColumns: 3,
        thumbnailsRows: 1,
        width: '600px'
      },
      {
        breakpoint: 767,
        image: true,
        thumbnailsColumns: 3,
        thumbnailsRows: 1,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_01.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_01.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_01.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_02.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_02.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_02.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_03.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_03.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_03.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_04.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_04.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_04.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_05.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_05.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_05.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_06.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_06.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_06.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_07.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_07.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_07.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_08.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_08.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_08.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_09.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_09.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_09.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_10.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_10.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_10.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_11.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_11.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_11.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_12.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_12.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_12.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_13.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_13.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_13.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_14.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_14.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_14.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_15.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_15.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_15.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_16.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_16.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_16.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_17.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_17.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_17.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_18.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_18.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_18.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_19.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_19.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_19.jpg'
      },
      {
        small: 'assets/images/gallery/audi_sq5/audi_sq5_20.jpg',
        medium: 'assets/images/gallery/audi_sq5/audi_sq5_20.jpg',
        big: 'assets/images/gallery/audi_sq5/audi_sq5_20.jpg'
      }
    ];
  }
}
