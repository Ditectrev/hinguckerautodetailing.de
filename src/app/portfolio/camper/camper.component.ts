import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-camper',
  templateUrl: './camper.component.html',
  styleUrls: ['./camper.component.scss']
})
export class CamperComponent implements OnInit {
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
        small: 'assets/images/gallery/camper/camper_01.jpg',
        medium: 'assets/images/gallery/camper/camper_01.jpg',
        big: 'assets/images/gallery/camper/camper_01.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_02.jpg',
        medium: 'assets/images/gallery/camper/camper_02.jpg',
        big: 'assets/images/gallery/camper/camper_02.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_03.jpg',
        medium: 'assets/images/gallery/camper/camper_03.jpg',
        big: 'assets/images/gallery/camper/camper_03.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_04.jpg',
        medium: 'assets/images/gallery/camper/camper_04.jpg',
        big: 'assets/images/gallery/camper/camper_04.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_05.jpg',
        medium: 'assets/images/gallery/camper/camper_05.jpg',
        big: 'assets/images/gallery/camper/camper_05.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_06.jpg',
        medium: 'assets/images/gallery/camper/camper_06.jpg',
        big: 'assets/images/gallery/camper/camper_06.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_07.jpg',
        medium: 'assets/images/gallery/camper/camper_07.jpg',
        big: 'assets/images/gallery/camper/camper_07.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_08.jpg',
        medium: 'assets/images/gallery/camper/camper_08.jpg',
        big: 'assets/images/gallery/camper/camper_08.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_09.jpg',
        medium: 'assets/images/gallery/camper/camper_09.jpg',
        big: 'assets/images/gallery/camper/camper_09.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_10.jpg',
        medium: 'assets/images/gallery/camper/camper_10.jpg',
        big: 'assets/images/gallery/camper/camper_10.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_11.jpg',
        medium: 'assets/images/gallery/camper/camper_11.jpg',
        big: 'assets/images/gallery/camper/camper_11.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_12.jpg',
        medium: 'assets/images/gallery/camper/camper_12.jpg',
        big: 'assets/images/gallery/camper/camper_12.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_13.jpg',
        medium: 'assets/images/gallery/camper/camper_13.jpg',
        big: 'assets/images/gallery/camper/camper_13.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_14.jpg',
        medium: 'assets/images/gallery/camper/camper_14.jpg',
        big: 'assets/images/gallery/camper/camper_14.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_15.jpg',
        medium: 'assets/images/gallery/camper/camper_15.jpg',
        big: 'assets/images/gallery/camper/camper_15.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_16.jpg',
        medium: 'assets/images/gallery/camper/camper_16.jpg',
        big: 'assets/images/gallery/camper/camper_16.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_17.jpg',
        medium: 'assets/images/gallery/camper/camper_17.jpg',
        big: 'assets/images/gallery/camper/camper_17.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_18.jpg',
        medium: 'assets/images/gallery/camper/camper_18.jpg',
        big: 'assets/images/gallery/camper/camper_18.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_19.jpg',
        medium: 'assets/images/gallery/camper/camper_19.jpg',
        big: 'assets/images/gallery/camper/camper_19.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_20.jpg',
        medium: 'assets/images/gallery/camper/camper_20.jpg',
        big: 'assets/images/gallery/camper/camper_20.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_21.jpg',
        medium: 'assets/images/gallery/camper/camper_21.jpg',
        big: 'assets/images/gallery/camper/camper_21.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_22.jpg',
        medium: 'assets/images/gallery/camper/camper_22.jpg',
        big: 'assets/images/gallery/camper/camper_22.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_23.jpg',
        medium: 'assets/images/gallery/camper/camper_23.jpg',
        big: 'assets/images/gallery/camper/camper_23.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_24.jpg',
        medium: 'assets/images/gallery/camper/camper_24.jpg',
        big: 'assets/images/gallery/camper/camper_24.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_25.jpg',
        medium: 'assets/images/gallery/camper/camper_25.jpg',
        big: 'assets/images/gallery/camper/camper_25.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_26.jpg',
        medium: 'assets/images/gallery/camper/camper_26.jpg',
        big: 'assets/images/gallery/camper/camper_26.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_27.jpg',
        medium: 'assets/images/gallery/camper/camper_27.jpg',
        big: 'assets/images/gallery/camper/camper_27.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_28.jpg',
        medium: 'assets/images/gallery/camper/camper_28.jpg',
        big: 'assets/images/gallery/camper/camper_28.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_29.jpg',
        medium: 'assets/images/gallery/camper/camper_29.jpg',
        big: 'assets/images/gallery/camper/camper_29.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_30.jpg',
        medium: 'assets/images/gallery/camper/camper_30.jpg',
        big: 'assets/images/gallery/camper/camper_30.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_31.jpg',
        medium: 'assets/images/gallery/camper/camper_31.jpg',
        big: 'assets/images/gallery/camper/camper_31.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_32.jpg',
        medium: 'assets/images/gallery/camper/camper_32.jpg',
        big: 'assets/images/gallery/camper/camper_32.jpg'
      },
      {
        small: 'assets/images/gallery/camper/camper_33.jpg',
        medium: 'assets/images/gallery/camper/camper_33.jpg',
        big: 'assets/images/gallery/camper/camper_33.jpg'
      }
    ];
  }
}
