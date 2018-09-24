import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-tesla-model-s-85',
  templateUrl: './tesla-model-s-85.component.html',
  styleUrls: ['./tesla-model-s-85.component.scss']
})
export class TeslaModelS85Component implements OnInit {
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
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_01.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_01.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_01.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_02.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_02.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_02.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_03.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_03.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_03.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_04.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_04.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_04.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_05.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_05.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_05.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_06.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_06.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_06.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_07.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_07.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_07.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_08.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_08.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_08.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_09.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_09.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_09.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_10.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_10.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_10.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_11.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_11.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_11.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_12.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_12.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_12.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_13.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_13.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_13.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_14.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_14.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_14.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_15.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_15.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_15.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_16.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_16.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_16.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_17.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_17.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_17.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_18.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_18.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_18.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_19.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_19.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_19.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_20.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_20.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_20.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_21.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_21.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_21.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_22.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_22.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_22.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_23.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_23.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_23.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_24.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_24.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_24.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_25.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_25.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_25.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_26.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_26.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_26.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_27.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_27.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_27.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_28.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_28.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_28.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_29.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_29.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_29.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_30.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_30.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_30.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_31.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_31.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_31.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_32.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_32.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_32.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_33.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_33.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_33.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_34.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_34.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_34.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_35.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_35.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_35.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_36.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_36.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_36.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_37.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_37.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_37.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_38.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_38.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_38.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_39.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_39.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_39.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_40.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_40.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_40.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_41.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_41.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_41.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_42.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_42.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_42.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_43.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_43.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_43.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_44.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_44.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_44.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_45.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_45.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_45.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_46.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_46.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_46.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_47.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_47.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_47.jpg'
      },
      {
        small: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_48.jpg',
        medium: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_48.jpg',
        big: 'assets/images/gallery/tesla_model_s_85/tesla_model_s_85_48.jpg'
      }
    ];
  }
}
