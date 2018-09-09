import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-golf-iv-gti',
  templateUrl: './golf-iv-gti.component.html',
  styleUrls: ['./golf-iv-gti.component.scss']
})
export class GolfIvGtiComponent implements OnInit {
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
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_01.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_01.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_01.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_02.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_02.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_02.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_03.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_03.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_03.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_04.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_04.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_04.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_05.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_05.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_05.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_06.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_06.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_06.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_07.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_07.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_07.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_08.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_08.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_08.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_09.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_09.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_09.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_10.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_10.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_10.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_11.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_11.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_11.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_12.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_12.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_12.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_13.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_13.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_13.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_14.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_14.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_14.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_15.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_15.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_15.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_16.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_16.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_16.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_17.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_17.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_17.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_18.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_18.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_18.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_19.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_19.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_19.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_20.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_20.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_20.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_21.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_21.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_21.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_22.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_22.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_22.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_23.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_23.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_23.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_24.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_24.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_24.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_25.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_25.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_25.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_26.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_26.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_26.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_27.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_27.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_27.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_28.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_28.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_28.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_29.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_29.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_29.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_30.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_30.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_30.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_31.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_31.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_31.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_32.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_32.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_32.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_33.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_33.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_33.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_34.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_34.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_34.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_35.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_35.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_35.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_36.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_36.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_36.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_37.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_37.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_37.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_38.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_38.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_38.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_39.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_39.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_39.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_40.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_40.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_40.jpg'
      },
      {
        small: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_41.jpg',
        medium: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_41.jpg',
        big: 'assets/images/gallery/golf_iv_gti/golf_iv_gti_41.jpg'
      }
    ];
  }
}
