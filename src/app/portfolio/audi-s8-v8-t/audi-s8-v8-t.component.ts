import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-audi-s8-v8-t',
  templateUrl: './audi-s8-v8-t.component.html',
  styleUrls: ['./audi-s8-v8-t.component.scss']
})
export class AudiS8V8TComponent implements OnInit {
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
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_01.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_01.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_01.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_02.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_02.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_02.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_03.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_03.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_03.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_04.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_04.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_04.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_05.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_05.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_05.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_06.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_06.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_06.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_07.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_07.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_07.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_08.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_08.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_08.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_09.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_09.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_09.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_10.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_10.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_10.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_11.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_11.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_11.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_12.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_12.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_12.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_13.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_13.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_13.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_14.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_14.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_14.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_15.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_15.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_15.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_16.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_16.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_16.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_17.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_17.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_17.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_18.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_18.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_18.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_19.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_19.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_19.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_20.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_20.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_20.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_21.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_21.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_21.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_22.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_22.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_22.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_23.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_23.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_23.jpg'
      },
      {
        small: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_24.jpg',
        medium: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_24.jpg',
        big: 'assets/images/gallery/audi_s8_v8_t/audi_s8_v8_t_24.jpg'
      }
    ];
  }
}
