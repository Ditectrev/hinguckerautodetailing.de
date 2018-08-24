import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-bmw-e39',
  templateUrl: './bmw-e39.component.html',
  styleUrls: ['./bmw-e39.component.scss']
})
export class BmwE39Component implements OnInit {
// Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '800px',
        image: false,
        imageSwipe: true,
        thumbnailsRows: 4,
        width: '800px'
      },
      {
        breakpoint: 991,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_01.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_01.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_01.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_02.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_02.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_02.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_03.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_03.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_03.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_04.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_04.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_04.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_05.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_05.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_05.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_06.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_06.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_06.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_07.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_07.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_07.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_08.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_08.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_08.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_09.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_09.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_09.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_10.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_010.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_10.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_11.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_11.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_11.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_12.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_12.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_12.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_13.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_13.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_13.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_14.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_14.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_14.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_15.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_15.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_15.jpg'
      },
      {
        small: 'assets/images/gallery/bmw_e39/bmw_e39_16.jpg',
        medium: 'assets/images/gallery/bmw_e39/bmw_e39_16.jpg',
        big: 'assets/images/gallery/bmw_e39/bmw_e39_16.jpg'
      }
    ];
  }
}
