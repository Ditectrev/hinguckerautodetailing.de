import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-bmw-330ci-e46',
  templateUrl: './bmw-330ci-e46.component.html',
  styleUrls: ['./bmw-330ci-e46.component.scss']
})
export class Bmw330ciE46Component implements OnInit {
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
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_01.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_01.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_01.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_02.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_02.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_02.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_03.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_03.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_03.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_04.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_04.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_04.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_05.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_05.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_05.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_06.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_06.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_06.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_07.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_07.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_07.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_08.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_08.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_08.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_09.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_09.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_09.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_10.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_10.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_10.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_11.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_11.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_11.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_12.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_12.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_12.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_13.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_13.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_13.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_14.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_14.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_14.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_15.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_15.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_15.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_16.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_16.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_16.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_17.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_17.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_17.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_18.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_18.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_18.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_19.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_19.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_19.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_20.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_20.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_20.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_21.jpg',
        medium: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_21.jpg',
        big: 'assets/images/gallery/bmw_330ci_e46/bmw_330ci_e46_21.jpg'
      }
    ];
  }
}
