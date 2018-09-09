import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-ferrari-612-scaglietti',
  templateUrl: './ferrari-612-scaglietti.component.html',
  styleUrls: ['./ferrari-612-scaglietti.component.scss']
})
export class Ferrari612ScagliettiComponent implements OnInit {
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
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_01.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_01.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_01.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_02.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_02.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_02.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_03.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_03.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_03.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_04.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_04.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_04.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_05.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_05.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_05.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_06.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_06.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_06.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_07.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_07.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_07.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_08.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_08.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_08.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_09.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_09.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_09.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_10.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_10.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_10.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_11.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_11.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_11.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_12.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_12.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_12.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_13.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_13.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_13.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_14.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_14.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_14.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_15.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_15.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_15.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_16.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_16.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_16.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_17.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_17.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_17.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_18.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_18.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_18.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_19.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_19.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_19.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_20.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_20.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_20.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_21.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_21.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_21.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_22.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_22.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_22.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_23.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_23.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_23.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_24.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_24.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_24.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_25.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_25.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_25.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_26.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_26.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_26.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_27.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_27.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_27.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_28.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_28.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_28.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_29.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_29.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_29.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_30.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_30.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_30.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_31.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_31.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_31.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_32.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_32.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_32.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_33.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_33.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_33.jpg'
      },
      {
        small: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_34.jpg',
        medium: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_34.jpg',
        big: 'assets/images/gallery/ferrari_612_scaglietti/ferrari_612_scaglietti_34.jpg'
      }
    ];
  }
}
