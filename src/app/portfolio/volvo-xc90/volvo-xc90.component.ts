import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-volvo-xc90',
  templateUrl: './volvo-xc90.component.html',
  styleUrls: ['./volvo-xc90.component.scss']
})
export class VolvoXc90Component implements OnInit {
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
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_01.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_01.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_01.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_02.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_02.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_02.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_03.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_03.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_03.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_04.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_04.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_04.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_05.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_05.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_05.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_06.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_06.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_06.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_07.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_07.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_07.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_08.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_08.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_08.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_09.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_09.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_09.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_10.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_10.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_10.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_11.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_11.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_11.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_12.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_12.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_12.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_13.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_13.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_13.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_14.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_14.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_14.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_15.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_15.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_15.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_16.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_16.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_16.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_17.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_17.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_17.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_18.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_18.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_18.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_19.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_19.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_19.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_20.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_20.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_20.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_21.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_21.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_21.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_22.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_22.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_22.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_23.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_23.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_23.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_24.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_24.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_24.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_25.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_25.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_25.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_26.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_26.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_26.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_27.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_27.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_27.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_28.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_28.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_28.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_29.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_29.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_29.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_30.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_30.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_30.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_31.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_31.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_31.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_32.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_32.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_32.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_33.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_33.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_33.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_34.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_34.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_34.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_35.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_35.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_35.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_36.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_36.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_36.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_37.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_37.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_37.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_38.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_38.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_38.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_39.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_39.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_39.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_40.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_40.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_40.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_41.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_41.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_41.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_42.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_42.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_42.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_43.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_43.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_43.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_44.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_44.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_44.jpg'
      },
      {
        small: 'assets/images/gallery/volvo_xc90/volvo_xc90_45.jpg',
        medium: 'assets/images/gallery/volvo_xc90/volvo_xc90_45.jpg',
        big: 'assets/images/gallery/volvo_xc90/volvo_xc90_45.jpg'
      }
    ];
  }
}
