import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-maserati-granturismo-2007',
  templateUrl: './maserati-granturismo-2007.component.html',
  styleUrls: ['./maserati-granturismo-2007.component.scss']
})
export class MaseratiGranturismo2007Component implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    // Show spinner for 2 seconds.
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
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
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_01.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_01.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_01.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_02.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_02.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_02.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_03.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_03.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_03.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_04.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_04.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_04.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_05.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_05.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_05.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_06.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_06.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_06.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_07.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_07.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_07.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_08.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_08.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_08.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_09.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_09.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_09.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_10.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_10.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_10.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_11.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_11.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_11.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_12.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_12.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_12.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_13.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_13.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_13.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_14.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_14.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_14.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_15.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_15.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_15.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_16.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_16.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_16.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_17.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_17.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_17.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_18.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_18.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_18.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_19.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_19.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_19.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_20.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_20.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_20.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_21.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_21.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_21.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_22.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_22.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_22.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_23.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_23.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_23.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_24.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_24.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_24.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_25.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_25.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_25.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_26.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_26.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_26.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_27.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_27.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_27.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_28.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_28.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_28.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_29.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_29.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_29.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_30.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_30.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_30.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_31.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_31.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_31.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_32.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_32.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_32.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_33.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_33.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_33.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_34.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_34.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_34.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_35.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_35.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_35.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_36.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_36.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_36.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_37.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_37.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_37.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_38.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_38.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_38.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_39.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_39.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_39.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_40.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_40.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_40.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_41.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_41.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_41.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_42.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_42.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_42.jpg'
      },
      {
        small: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_43.jpg',
        medium: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_43.jpg',
        big: 'assets/images/gallery/maserati_granturismo_2007/maserati_granturismo_2007_43.jpg'
      }
    ];
  }
}
