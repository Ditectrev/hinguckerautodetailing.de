import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-ford-mustang-v-coupe',
  templateUrl: './ford-mustang-v-coupe.component.html',
  styleUrls: ['./ford-mustang-v-coupe.component.scss']
})
export class FordMustangVCoupeComponent implements OnInit {
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
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_01.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_01.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_01.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_02.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_02.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_02.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_03.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_03.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_03.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_04.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_04.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_04.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_05.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_05.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_05.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_06.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_06.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_06.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_07.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_07.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_07.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_08.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_08.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_08.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_09.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_09.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_09.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_10.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_10.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_10.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_11.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_11.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_11.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_12.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_12.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_12.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_13.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_13.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_13.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_14.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_14.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_14.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_15.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_15.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_15.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_16.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_16.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_16.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_17.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_17.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_17.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_18.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_18.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_18.jpg'
      },
      {
        small: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_19.jpg',
        medium: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_19.jpg',
        big: 'assets/images/gallery/ford_mustang_v_coupe/ford_mustang_v_coupe_19.jpg'
      }
    ];
  }
}
