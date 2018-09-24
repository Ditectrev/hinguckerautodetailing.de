import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-mercedes-c-63s-amg',
  templateUrl: './mercedes-c-63s-amg.component.html',
  styleUrls: ['./mercedes-c-63s-amg.component.scss']
})
export class MercedesC63sAmgComponent implements OnInit {
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
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_01.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_01.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_01.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_02.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_02.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_02.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_03.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_03.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_03.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_04.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_04.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_04.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_05.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_05.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_05.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_06.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_06.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_06.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_07.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_07.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_07.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_08.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_08.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_08.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_09.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_09.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_09.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_10.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_10.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_10.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_11.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_11.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_11.jpg'
      },
      {
        small: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_12.jpg',
        medium: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_12.jpg',
        big: 'assets/images/gallery/mercedes_c_63s_amg/mercedes_c_63s_amg_12.jpg'
      }
    ];
  }
}
