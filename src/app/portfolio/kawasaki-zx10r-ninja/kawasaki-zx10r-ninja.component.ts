import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-kawasaki-zx10r-ninja',
  templateUrl: './kawasaki-zx10r-ninja.component.html',
  styleUrls: ['./kawasaki-zx10r-ninja.component.scss']
})
export class KawasakiZx10rNinjaComponent implements OnInit {
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
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_01.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_01.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_01.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_02.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_02.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_02.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_03.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_03.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_03.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_04.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_04.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_04.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_05.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_05.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_05.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_06.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_06.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_06.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_07.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_07.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_07.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_08.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_08.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_08.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_09.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_09.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_09.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_10.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_10.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_10.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_11.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_11.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_11.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_12.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_12.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_12.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_13.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_13.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_13.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_14.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_14.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_14.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_15.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_15.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_15.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_16.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_16.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_16.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_17.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_17.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_17.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_18.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_18.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_18.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_19.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_19.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_19.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_20.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_20.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_20.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_21.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_21.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_21.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_22.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_22.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_22.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_23.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_23.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_23.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_24.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_24.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_24.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_25.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_25.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_25.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_26.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_26.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_26.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_27.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_27.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_27.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_28.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_28.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_28.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_29.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_29.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_29.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_30.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_30.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_30.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_31.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_31.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_31.jpg'
      },
      {
        small: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_32.jpg',
        medium: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_32.jpg',
        big: 'assets/images/gallery/kawasaki_zx10r_ninja/kawasaki_zx10r_ninja_32.jpg'
      }
    ];
  }
}
