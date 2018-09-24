import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-range-rover-supercharged-autobiography',
  templateUrl: './range-rover-supercharged-autobiography.component.html',
  styleUrls: ['./range-rover-supercharged-autobiography.component.scss']
})
export class RangeRoverSuperchargedAutobiographyComponent implements OnInit {
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
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_01.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_01.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_01.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_02.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_02.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_02.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_03.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_03.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_03.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_04.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_04.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_04.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_05.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_05.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_05.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_06.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_06.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_06.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_07.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_07.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_07.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_08.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_08.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_08.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_09.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_09.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_09.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_10.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_10.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_10.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_11.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_11.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_11.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_12.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_12.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_12.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_13.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_13.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_13.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_14.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_14.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_14.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_15.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_15.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_15.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_16.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_16.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_16.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_17.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_17.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_17.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_18.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_18.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_18.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_19.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_19.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_19.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_20.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_20.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_20.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_21.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_21.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_21.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_22.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_22.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_22.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_23.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_23.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_23.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_24.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_24.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_24.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_25.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_25.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_25.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_26.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_26.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_26.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_27.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_27.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_27.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_28.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_28.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_28.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_29.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_29.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_29.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_30.jpg',
        medium: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_30.jpg',
        big: 'assets/images/gallery/range_rover_supercharged_autobiography/range_rover_supercharged_autobiography_30.jpg'
      }
    ];
  }
}
