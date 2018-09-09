import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-porsche-944',
  templateUrl: './porsche-944.component.html',
  styleUrls: ['./porsche-944.component.scss']
})
export class Porsche944Component implements OnInit {
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
        small: 'assets/images/gallery/porsche_944/porsche_944_01.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_01.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_01.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_02.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_02.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_02.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_03.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_03.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_03.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_04.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_04.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_04.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_05.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_05.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_05.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_06.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_06.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_06.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_07.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_07.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_07.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_08.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_08.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_08.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_09.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_09.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_09.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_10.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_10.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_10.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_11.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_11.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_11.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_12.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_12.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_12.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_13.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_13.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_13.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_14.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_14.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_14.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_15.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_15.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_15.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_16.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_16.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_16.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_17.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_17.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_17.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_18.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_18.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_18.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_19.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_19.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_19.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_20.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_20.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_20.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_21.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_21.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_21.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_22.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_22.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_22.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_23.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_23.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_23.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_24.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_24.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_24.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_25.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_25.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_25.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_26.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_26.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_26.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_27.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_27.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_27.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_28.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_28.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_28.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_29.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_29.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_29.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_30.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_30.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_30.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_31.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_31.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_31.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_32.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_32.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_32.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_33.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_33.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_33.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_34.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_34.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_34.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_35.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_35.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_35.jpg'
      },
      {
        small: 'assets/images/gallery/porsche_944/porsche_944_36.jpg',
        medium: 'assets/images/gallery/porsche_944/porsche_944_36.jpg',
        big: 'assets/images/gallery/porsche_944/porsche_944_36.jpg'
      }
    ];
  }
}
