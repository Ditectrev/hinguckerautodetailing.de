import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-infiniti-qx70s',
  templateUrl: './infiniti-qx70s.component.html',
  styleUrls: ['./infiniti-qx70s.component.scss']
})
export class InfinitiQx70sComponent implements OnInit {
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
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_01.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_01.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_01.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_02.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_02.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_02.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_03.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_03.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_03.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_04.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_04.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_04.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_05.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_05.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_05.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_06.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_06.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_06.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_07.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_07.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_07.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_08.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_08.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_08.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_09.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_09.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_09.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_10.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_10.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_10.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_11.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_11.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_11.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_12.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_12.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_12.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_13.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_13.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_13.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_14.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_14.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_14.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_15.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_15.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_15.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_16.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_16.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_16.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_17.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_17.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_17.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_18.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_18.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_18.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_19.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_19.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_19.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_20.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_20.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_20.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_21.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_21.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_21.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_22.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_22.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_22.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_23.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_23.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_23.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_24.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_24.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_24.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_25.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_25.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_25.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_26.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_26.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_26.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_27.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_27.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_27.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_28.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_28.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_28.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_29.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_29.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_29.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_30.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_30.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_30.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_31.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_31.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_31.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_32.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_32.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_32.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_33.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_33.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_33.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_34.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_34.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_34.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_35.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_35.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_35.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_36.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_36.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_36.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_37.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_37.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_37.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_38.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_38.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_38.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_39.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_39.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_39.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_40.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_40.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_40.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_41.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_41.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_41.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_42.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_42.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_42.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_43.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_43.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_43.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_44.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_44.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_44.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_45.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_45.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_45.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_46.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_46.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_46.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_47.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_47.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_47.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_48.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_48.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_48.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_49.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_49.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_49.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_50.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_50.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_50.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_51.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_51.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_51.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_52.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_52.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_52.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_53.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_53.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_53.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_54.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_54.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_54.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_55.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_55.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_55.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_56.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_56.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_56.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_57.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_57.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_57.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_58.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_58.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_58.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_59.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_49.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_59.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_60.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_60.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_60.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_61.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_61.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_61.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_62.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_62.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_62.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_63.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_63.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_63.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_64.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_64.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_64.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_65.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_65.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_65.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_66.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_66.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_66.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_67.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_67.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_67.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_68.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_68.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_68.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_69.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_49.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_69.jpg'
      },
      {
        small: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_70.jpg',
        medium: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_70.jpg',
        big: 'assets/images/gallery/infiniti_qx70s/infiniti_qx70s_70.jpg'
      }
    ];
  }
}
