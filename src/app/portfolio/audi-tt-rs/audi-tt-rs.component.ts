import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-audi-tt-rs',
  templateUrl: './audi-tt-rs.component.html',
  styleUrls: ['./audi-tt-rs.component.scss']
})
export class AudiTtRsComponent implements OnInit {
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
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_01.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_01.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_01.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_02.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_02.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_02.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_03.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_03.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_03.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_04.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_04.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_04.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_05.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_05.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_05.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_06.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_06.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_06.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_07.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_07.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_07.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_08.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_08.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_08.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_09.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_09.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_09.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_10.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_10.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_10.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_11.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_11.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_11.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_12.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_12.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_12.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_13.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_13.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_13.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_14.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_14.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_14.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_15.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_15.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_15.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_16.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_16.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_16.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_17.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_17.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_17.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_18.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_18.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_18.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_19.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_19.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_19.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_20.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_20.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_20.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_21.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_21.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_21.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_22.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_22.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_22.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_23.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_23.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_23.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_24.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_24.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_24.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_25.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_25.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_25.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_26.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_26.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_26.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_27.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_27.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_27.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_28.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_28.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_28.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_29.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_29.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_29.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_30.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_30.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_30.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_31.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_31.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_31.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_32.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_32.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_32.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_33.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_33.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_33.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_34.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_34.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_34.jpg'
      },
      {
        small: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_35.jpg',
        medium: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_35.jpg',
        big: 'assets/images/gallery/audi_tt_rs/audi_tt_rs_35.jpg'
      }
    ];
  }
}
