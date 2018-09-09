import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-range-rover',
  templateUrl: './range-rover.component.html',
  styleUrls: ['./range-rover.component.scss']
})
export class RangeRoverComponent implements OnInit {
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
        small: 'assets/images/gallery/range_rover/range_rover_01.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_01.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_01.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_02.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_02.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_02.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_03.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_03.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_03.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_04.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_04.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_04.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_05.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_05.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_05.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_06.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_06.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_06.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_07.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_07.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_07.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_08.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_08.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_08.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_09.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_09.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_09.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_10.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_10.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_10.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_11.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_11.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_11.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_12.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_12.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_12.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_13.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_13.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_13.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_14.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_14.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_14.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_15.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_15.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_15.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_16.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_16.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_16.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_17.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_17.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_17.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_18.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_18.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_18.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_19.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_19.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_19.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_20.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_20.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_20.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_21.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_21.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_21.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_22.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_22.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_22.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_23.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_23.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_23.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_24.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_24.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_24.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_25.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_25.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_25.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_26.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_26.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_26.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_27.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_27.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_27.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_28.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_28.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_28.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_29.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_29.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_29.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_30.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_30.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_30.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_31.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_31.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_31.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_32.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_32.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_32.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_33.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_33.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_33.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_34.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_34.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_34.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_35.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_35.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_35.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_36.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_36.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_36.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_37.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_37.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_37.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_38.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_38.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_38.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_39.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_39.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_39.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_40.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_40.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_40.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_41.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_41.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_41.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_42.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_42.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_42.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_43.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_43.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_43.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_44.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_44.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_44.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_45.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_45.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_45.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_46.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_46.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_46.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_47.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_47.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_47.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_48.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_48.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_48.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_49.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_49.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_49.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_50.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_50.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_50.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_51.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_51.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_51.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_52.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_52.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_52.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_53.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_53.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_53.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_54.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_54.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_54.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_55.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_55.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_55.jpg'
      },
      {
        small: 'assets/images/gallery/range_rover/range_rover_56.jpg',
        medium: 'assets/images/gallery/range_rover/range_rover_56.jpg',
        big: 'assets/images/gallery/range_rover/range_rover_56.jpg'
      }
    ];
  }
}
