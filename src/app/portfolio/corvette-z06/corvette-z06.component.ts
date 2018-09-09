import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-corvette-z06',
  templateUrl: './corvette-z06.component.html',
  styleUrls: ['./corvette-z06.component.scss']
})
export class CorvetteZ06Component implements OnInit {
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
        small: 'assets/images/gallery/corvette_z06/corvette_z06_01.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_01.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_01.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_02.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_02.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_02.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_03.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_03.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_03.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_04.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_04.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_04.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_05.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_05.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_05.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_06.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_06.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_06.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_07.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_07.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_07.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_08.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_08.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_08.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_09.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_09.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_09.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_10.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_10.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_10.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_11.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_11.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_11.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_12.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_12.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_12.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_13.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_13.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_13.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_14.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_14.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_14.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_15.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_15.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_15.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_16.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_16.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_16.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_17.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_17.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_17.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_18.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_18.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_18.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_19.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_19.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_19.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_20.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_20.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_20.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_21.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_21.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_21.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_22.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_22.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_22.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_23.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_23.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_23.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_24.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_24.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_24.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_25.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_25.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_25.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_26.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_26.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_26.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_27.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_27.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_27.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_28.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_28.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_28.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_29.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_29.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_29.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_30.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_30.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_30.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_31.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_31.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_31.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_32.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_32.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_32.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_33.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_33.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_33.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_34.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_34.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_34.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_35.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_35.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_35.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_36.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_36.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_36.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_37.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_37.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_37.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_38.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_38.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_38.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_39.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_39.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_39.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_40.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_40.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_40.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_41.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_41.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_41.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_42.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_42.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_42.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_43.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_43.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_43.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_44.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_44.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_44.jpg'
      },
      {
        small: 'assets/images/gallery/corvette_z06/corvette_z06_45.jpg',
        medium: 'assets/images/gallery/corvette_z06/corvette_z06_45.jpg',
        big: 'assets/images/gallery/corvette_z06/corvette_z06_45.jpg'
      }
    ];
  }
}
