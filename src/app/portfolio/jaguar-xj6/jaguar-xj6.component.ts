import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-jaguar-xj6',
  templateUrl: './jaguar-xj6.component.html',
  styleUrls: ['./jaguar-xj6.component.scss']
})
export class JaguarXj6Component implements OnInit {
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
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_01.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_01.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_01.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_02.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_02.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_02.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_03.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_03.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_03.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_04.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_04.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_04.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_05.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_05.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_05.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_06.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_06.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_06.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_07.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_07.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_07.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_08.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_08.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_08.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_09.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_09.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_09.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_10.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_10.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_10.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_11.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_11.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_11.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_12.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_12.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_12.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_13.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_13.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_13.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_14.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_14.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_14.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_15.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_15.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_15.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_16.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_16.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_16.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_17.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_17.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_17.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_18.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_18.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_18.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_19.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_19.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_19.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_20.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_20.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_20.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_21.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_21.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_21.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_22.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_22.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_22.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_23.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_23.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_23.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_24.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_24.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_24.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_25.jpg',
        medium: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_25.jpg',
        big: 'assets/images/gallery/jaguar_xj6/jaguar_xj6_25.jpg'
      }
    ];
  }
}
