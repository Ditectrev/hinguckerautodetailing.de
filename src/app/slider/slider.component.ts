import {Component, OnInit} from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js';
import { AfterViewInit } from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction} from 'ngx-gallery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '100vh',
        fullWidth: true,
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageArrows: false,
        imageAutoPlay: true,
        imageDescription: true,
        imageInfinityMove: true,
        imageSwipe: true,
        lazyLoading: true,
        preview: false,
        thumbnails: false
      },
      // max-width 575, hide on mobile phones.
      {
        breakpoint: 575,
        height: '0px',
        image: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/slider1.jpg',
        medium: 'assets/images/slider1.jpg',
        big: 'assets/images/slider1.jpg',
        description: 'Titel 1'
      },
      {
        small: 'assets/images/slider2.jpg',
        medium: 'assets/images/slider2.jpg',
        big: 'assets/images/slider2.jpg',
        description: 'Titel 2'
      },
      {
        small: 'assets/images/slider3.jpg',
        medium: 'assets/images/slider3.jpg',
        big: 'assets/images/slider3.jpg',
        description: 'Titel 3'
      }
    ];
  }
  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
