import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-citroen-ds-cabrio',
  templateUrl: './citroen-ds-cabrio.component.html',
  styleUrls: ['./citroen-ds-cabrio.component.scss']
})
export class CitroenDsCabrioComponent implements OnInit {
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
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_01.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_01.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_01.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_02.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_02.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_02.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_03.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_03.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_03.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_04.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_04.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_04.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_05.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_05.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_05.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_06.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_06.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_06.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_07.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_07.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_07.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_08.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_08.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_08.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_09.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_09.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_09.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_10.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_10.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_10.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_11.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_11.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_11.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_12.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_12.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_12.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_13.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_13.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_13.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_14.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_14.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_14.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_15.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_15.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_15.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_16.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_16.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_16.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_17.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_17.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_17.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_18.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_18.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_18.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_19.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_19.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_19.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_20.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_20.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_20.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_21.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_21.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_21.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_22.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_22.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_22.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_23.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_23.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_23.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_24.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_24.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_24.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_25.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_25.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_25.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_26.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_26.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_26.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_27.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_27.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_27.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_28.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_28.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_28.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_29.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_29.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_29.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_30.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_30.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_30.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_31.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_31.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_31.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_32.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_32.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_32.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_33.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_33.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_33.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_34.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_34.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_34.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_35.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_35.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_35.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_36.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_36.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_36.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_37.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_37.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_37.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_38.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_38.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_38.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_39.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_39.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_39.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_40.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_40.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_40.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_41.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_41.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_41.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_42.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_42.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_42.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_43.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_43.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_43.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_44.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_44.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_44.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_45.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_45.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_45.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_46.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_46.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_46.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_47.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_47.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_47.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_48.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_48.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_48.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_49.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_49.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_49.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_50.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_50.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_50.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_51.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_51.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_51.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_52.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_52.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_52.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_53.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_53.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_53.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_54.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_54.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_54.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_55.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_55.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_55.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_56.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_56.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_56.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_57.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_57.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_57.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_58.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_58.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_58.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_59.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_49.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_59.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_60.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_60.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_60.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_61.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_61.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_61.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_62.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_62.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_62.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_63.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_63.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_63.jpg'
      },
      {
        small: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_64.jpg',
        medium: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_64.jpg',
        big: 'assets/images/gallery/citroen_ds_cabrio/citroen_ds_cabrio_64.jpg'
      }
    ];
  }
}
