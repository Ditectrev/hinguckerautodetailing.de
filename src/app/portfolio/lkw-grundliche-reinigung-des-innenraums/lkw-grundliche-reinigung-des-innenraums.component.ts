import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-lkw-grundliche-reinigung-des-innenraums',
  templateUrl: './lkw-grundliche-reinigung-des-innenraums.component.html',
  styleUrls: ['./lkw-grundliche-reinigung-des-innenraums.component.scss']
})
export class LkwGrundlicheReinigungDesInnenraumsComponent implements OnInit {
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
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_01.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_01.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_01.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_02.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_02.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_02.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_03.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_03.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_03.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_04.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_04.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_04.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_05.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_05.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_05.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_06.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_06.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_06.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_07.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_07.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_07.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_08.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_08.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_08.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_09.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_09.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_09.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_10.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_10.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_10.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_11.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_11.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_11.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_12.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_12.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_12.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_13.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_13.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_13.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_14.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_14.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_14.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_15.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_15.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_15.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_16.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_16.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_16.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_17.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_17.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_17.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_18.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_18.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_18.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_19.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_19.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_19.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_20.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_20.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_20.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_21.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_21.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_21.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_22.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_22.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_22.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_23.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_23.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_23.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_24.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_24.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_24.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_25.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_25.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_25.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_26.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_26.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_26.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_27.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_27.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_27.jpg'
      },
      {
        small: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_28.jpg',
        medium: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_28.jpg',
        big: 'assets/images/gallery/lkw_grundliche_reinigung_des_innenraums/lkw_grundliche_reinigung_des_innenraums_28.jpg'
      }
    ];
  }
}
