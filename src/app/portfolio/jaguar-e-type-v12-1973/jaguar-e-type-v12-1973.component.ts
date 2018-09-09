import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-jaguar-e-type-v12-1973',
  templateUrl: './jaguar-e-type-v12-1973.component.html',
  styleUrls: ['./jaguar-e-type-v12-1973.component.scss']
})
export class JaguarETypeV121973Component implements OnInit {
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
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_01.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_01.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_01.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_02.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_02.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_02.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_03.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_03.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_03.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_04.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_04.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_04.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_05.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_05.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_05.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_06.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_06.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_06.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_07.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_07.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_07.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_08.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_08.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_08.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_09.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_09.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_09.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_10.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_10.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_10.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_11.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_11.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_11.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_12.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_12.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_12.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_13.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_13.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_13.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_14.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_14.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_14.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_15.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_15.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_15.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_16.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_16.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_16.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_17.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_17.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_17.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_18.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_18.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_18.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_19.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_19.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_19.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_20.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_20.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_20.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_21.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_21.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_21.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_22.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_22.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_22.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_23.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_23.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_23.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_24.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_24.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_24.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_25.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_25.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_25.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_26.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_26.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_26.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_27.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_27.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_27.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_28.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_28.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_28.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_29.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_29.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_29.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_30.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_30.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_30.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_31.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_31.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_31.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_32.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_32.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_32.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_33.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_33.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_33.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_34.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_34.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_34.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_35.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_35.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_35.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_36.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_36.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_36.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_37.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_37.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_37.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_38.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_38.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_38.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_39.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_39.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_39.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_40.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_40.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_40.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_41.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_41.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_41.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_42.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_42.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_42.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_43.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_43.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_43.jpg'
      },
      {
        small: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_44.jpg',
        medium: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_44.jpg',
        big: 'assets/images/gallery/jaguar_e_type_v12_1973/jaguar_e_type_v12_1973_44.jpg'
      }
    ];
  }
}
