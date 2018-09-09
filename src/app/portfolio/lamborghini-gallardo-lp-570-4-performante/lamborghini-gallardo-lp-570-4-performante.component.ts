import { Component, OnInit } from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-lamborghini-gallardo-lp-570-4-performante',
  templateUrl: './lamborghini-gallardo-lp-570-4-performante.component.html',
  styleUrls: ['./lamborghini-gallardo-lp-570-4-performante.component.scss']
})
export class LamborghiniGallardoLp5704PerformanteComponent implements OnInit {
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
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_01.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_01.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_01.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_02.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_02.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_02.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_03.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_03.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_03.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_04.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_04.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_04.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_05.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_05.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_05.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_06.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_06.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_06.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_07.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_07.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_07.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_08.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_08.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_08.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_09.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_09.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_09.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_10.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_10.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_10.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_11.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_11.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_11.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_12.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_12.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_12.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_13.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_13.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_13.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_14.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_14.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_14.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_15.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_15.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_15.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_16.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_16.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_16.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_17.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_17.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_17.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_18.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_18.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_18.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_19.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_19.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_19.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_20.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_20.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_20.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_21.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_21.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_21.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_22.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_22.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_22.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_23.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_23.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_23.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_24.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_24.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_24.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_25.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_25.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_25.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_26.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_26.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_26.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_27.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_27.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_27.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_28.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_28.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_28.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_29.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_29.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_29.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_30.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_30.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_30.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_31.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_31.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_31.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_32.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_32.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_32.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_33.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_33.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_33.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_34.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_34.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_34.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_35.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_35.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_35.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_36.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_36.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_36.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_37.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_37.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_37.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_38.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_38.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_38.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_39.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_39.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_39.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_40.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_40.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_40.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_41.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_41.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_41.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_42.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_42.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_42.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_43.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_43.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_43.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_44.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_44.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_44.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_45.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_45.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_45.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_46.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_46.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_46.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_47.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_47.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_47.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_48.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_48.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_48.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_49.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_49.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_49.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_50.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_50.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_50.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_51.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_51.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_51.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_52.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_52.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_52.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_53.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_53.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_53.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_54.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_54.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_54.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_55.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_55.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_55.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_56.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_56.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_56.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_57.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_57.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_57.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_58.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_58.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_58.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_59.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_59.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_59.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_60.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_60.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_60.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_61.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_61.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_61.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_62.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_62.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_62.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_63.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_63.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_63.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_64.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_64.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_64.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_65.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_65.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_65.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_66.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_66.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_66.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_67.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_67.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_67.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_68.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_68.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_68.jpg'
      },
      {
        small: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_69.jpg',
        medium: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_69.jpg',
        big: 'assets/images/gallery/lamborghini_gallardo_lp_570-4_performante/lamborghini_gallardo_lp_570-4_performante_69.jpg'
      }
    ];
  }
}
