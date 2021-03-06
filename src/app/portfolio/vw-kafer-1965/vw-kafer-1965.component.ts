import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-vw-kafer-1965',
  templateUrl: './vw-kafer-1965.component.html',
  styleUrls: ['./vw-kafer-1965.component.scss']
})
export class VwKafer1965Component implements OnInit {
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
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_01.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_01.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_01.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_02.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_02.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_02.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_03.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_03.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_03.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_04.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_04.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_04.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_05.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_05.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_05.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_06.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_06.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_06.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_07.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_07.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_07.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_08.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_08.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_08.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_09.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_09.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_09.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_10.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_10.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_10.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_11.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_11.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_11.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_12.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_12.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_12.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_13.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_13.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_13.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_14.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_14.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_14.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_15.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_15.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_15.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_16.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_16.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_16.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_17.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_17.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_17.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_18.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_18.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_18.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_19.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_19.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_19.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_20.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_20.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_20.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_21.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_21.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_21.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_22.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_22.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_22.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_23.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_23.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_23.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_24.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_24.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_24.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_25.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_25.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_25.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_26.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_26.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_26.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_27.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_27.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_27.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_28.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_28.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_28.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_29.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_29.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_29.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_30.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_30.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_30.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_31.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_31.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_31.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_32.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_32.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_32.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_33.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_33.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_33.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_34.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_34.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_34.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_35.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_35.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_35.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_36.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_36.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_36.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_37.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_37.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_37.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_38.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_38.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_38.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_39.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_39.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_39.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_40.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_40.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_40.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_41.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_41.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_41.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_42.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_42.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_42.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_43.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_43.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_43.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_44.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_44.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_44.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_45.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_45.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_45.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_46.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_46.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_46.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_47.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_47.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_47.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_48.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_48.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_48.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_49.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_49.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_49.jpg'
      },
      {
        small: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_50.jpg',
        medium: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_50.jpg',
        big: 'assets/images/gallery/vw_kafer_1965/vw_kafer_1965_50.jpg'
      }
    ];
  }
}
