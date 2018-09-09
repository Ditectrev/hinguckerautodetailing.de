import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-skoda-fabia',
  templateUrl: './skoda-fabia.component.html',
  styleUrls: ['./skoda-fabia.component.scss']
})
export class SkodaFabiaComponent implements OnInit {
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
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_01.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_01.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_01.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_02.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_02.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_02.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_03.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_03.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_03.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_04.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_04.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_04.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_05.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_05.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_05.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_06.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_06.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_06.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_07.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_07.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_07.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_08.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_08.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_08.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_09.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_09.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_09.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_10.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_10.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_10.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_11.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_11.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_11.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_12.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_12.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_12.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_13.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_13.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_13.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_14.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_14.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_14.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_15.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_15.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_15.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_16.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_16.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_16.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_17.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_17.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_17.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_18.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_18.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_18.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_19.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_19.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_19.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_20.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_20.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_20.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_21.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_21.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_21.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_22.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_22.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_22.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_23.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_23.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_23.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_24.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_24.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_24.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_25.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_25.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_25.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_26.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_26.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_26.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_27.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_27.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_27.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_28.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_28.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_28.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_29.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_29.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_29.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_30.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_30.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_30.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_31.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_31.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_31.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_32.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_32.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_32.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_33.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_33.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_33.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_34.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_34.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_34.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_35.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_35.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_35.jpg'
      },
      {
        small: 'assets/images/gallery/skoda_fabia/skoda_fabia_36.jpg',
        medium: 'assets/images/gallery/skoda_fabia/skoda_fabia_36.jpg',
        big: 'assets/images/gallery/skoda_fabia/skoda_fabia_36.jpg'
      }
    ];
  }
}
