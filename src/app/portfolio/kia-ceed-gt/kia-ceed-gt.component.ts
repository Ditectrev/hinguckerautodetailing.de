import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-kia-ceed-gt',
  templateUrl: './kia-ceed-gt.component.html',
  styleUrls: ['./kia-ceed-gt.component.scss']
})
export class KiaCeedGtComponent implements OnInit {
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
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_01.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_01.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_01.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_02.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_02.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_02.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_03.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_03.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_03.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_04.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_04.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_04.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_05.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_05.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_05.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_06.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_06.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_06.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_07.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_07.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_07.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_08.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_08.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_08.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_09.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_09.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_09.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_10.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_10.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_10.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_11.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_11.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_11.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_12.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_12.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_12.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_13.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_13.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_13.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_14.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_14.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_14.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_15.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_15.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_15.jpg'
      },
      {
        small: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_16.jpg',
        medium: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_16.jpg',
        big: 'assets/images/gallery/kia_ceed_gt/kia_ceed_gt_16.jpg'
      }
    ];
  }
}
