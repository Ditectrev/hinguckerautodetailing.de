import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-paint-protection-quartz',
  templateUrl: './paint-protection-quartz.component.html',
  styleUrls: ['./paint-protection-quartz.component.scss']
})
export class PaintProtectionQuartzComponent implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '200px',
        image: false,
        imageSwipe: true,
        width: '800px'
      },
      {
        breakpoint: 991,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/services/paint-protection-quartz1.jpg',
        medium: 'assets/images/services/paint-protection-quartz1.jpg',
        big: 'assets/images/services/paint-protection-quartz1.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-quartz2.jpg',
        medium: 'assets/images/services/paint-protection-quartz2.jpg',
        big: 'assets/images/services/paint-protection-quartz2.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-quartz3.jpg',
        medium: 'assets/images/services/paint-protection-quartz3.jpg',
        big: 'assets/images/services/paint-protection-quartz3.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-quartz4.jpg',
        medium: 'assets/images/services/paint-protection-quartz4.jpg',
        big: 'assets/images/services/paint-protection-quartz4.jpg'
      }
    ];
  }
}
