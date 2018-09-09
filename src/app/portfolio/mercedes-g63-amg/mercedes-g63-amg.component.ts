import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-mercedes-g63-amg',
  templateUrl: './mercedes-g63-amg.component.html',
  styleUrls: ['./mercedes-g63-amg.component.scss']
})
export class MercedesG63AmgComponent implements OnInit {
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
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_01.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_01.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_01.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_02.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_02.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_02.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_03.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_03.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_03.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_04.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_04.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_04.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_05.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_05.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_05.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_06.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_06.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_06.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_07.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_07.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_07.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_08.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_08.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_08.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_09.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_09.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_09.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_10.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_10.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_10.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_11.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_11.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_11.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_12.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_12.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_12.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_13.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_13.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_13.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_14.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_14.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_14.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_15.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_15.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_15.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_16.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_16.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_16.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_17.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_17.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_17.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_18.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_18.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_18.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_19.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_19.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_19.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_20.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_20.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_20.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_21.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_21.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_21.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_22.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_22.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_22.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_23.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_23.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_23.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_24.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_24.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_24.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_25.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_25.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_25.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_26.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_26.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_26.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_27.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_27.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_27.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_28.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_28.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_28.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_29.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_29.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_29.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_30.jpg',
        medium: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_30.jpg',
        big: 'assets/images/gallery/mercedes_g63_amg/mercedes_g63_amg_30.jpg'
      }
    ];
  }
}
