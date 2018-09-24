import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-rolls-royce-corniche-iv',
  templateUrl: './rolls-royce-corniche-iv.component.html',
  styleUrls: ['./rolls-royce-corniche-iv.component.scss']
})
export class RollsRoyceCornicheIvComponent implements OnInit {
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
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_01.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_01.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_01.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_02.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_02.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_02.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_03.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_03.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_03.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_04.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_04.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_04.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_05.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_05.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_05.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_06.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_06.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_06.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_07.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_07.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_07.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_08.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_08.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_08.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_09.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_09.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_09.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_10.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_10.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_10.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_11.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_11.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_11.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_12.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_12.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_12.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_13.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_13.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_13.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_14.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_14.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_14.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_15.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_15.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_15.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_16.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_16.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_16.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_17.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_17.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_17.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_18.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_18.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_18.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_19.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_19.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_19.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_20.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_20.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_20.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_21.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_21.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_21.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_22.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_22.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_22.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_23.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_23.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_23.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_24.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_24.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_24.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_25.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_25.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_25.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_26.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_26.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_26.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_27.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_27.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_27.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_28.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_28.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_28.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_29.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_29.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_29.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_30.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_30.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_30.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_31.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_31.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_31.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_32.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_32.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_32.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_33.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_33.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_33.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_34.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_34.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_34.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_35.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_35.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_35.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_36.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_36.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_36.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_37.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_37.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_37.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_38.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_38.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_38.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_39.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_39.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_39.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_40.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_40.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_40.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_41.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_41.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_41.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_42.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_42.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_42.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_43.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_43.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_43.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_44.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_44.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_44.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_45.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_45.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_45.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_46.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_46.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_46.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_47.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_47.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_47.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_48.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_48.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_48.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_49.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_49.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_49.jpg'
      },
      {
        small: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_50.jpg',
        medium: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_50.jpg',
        big: 'assets/images/gallery/rolls_royce_corniche_iv/rolls_royce_corniche_iv_50.jpg'
      }
    ];
  }
}
