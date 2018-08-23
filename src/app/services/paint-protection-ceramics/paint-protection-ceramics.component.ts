import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-paint-protection-ceramics',
  templateUrl: './paint-protection-ceramics.component.html',
  styleUrls: ['./paint-protection-ceramics.component.scss']
})
export class PaintProtectionCeramicsComponent implements OnInit {
  // Slider options.
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '800px',
        width: '800px',
        imageSwipe: true,
        lazyLoading: true
      },
      {
        breakpoint: 991,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/services/paint-protection-ceramics1.jpg',
        medium: 'assets/images/services/paint-protection-ceramics1.jpg',
        big: 'assets/images/services/paint-protection-ceramics1.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-ceramics2.jpg',
        medium: 'assets/images/services/paint-protection-ceramics2.jpg',
        big: 'assets/images/services/paint-protection-ceramics2.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-ceramics3.jpg',
        medium: 'assets/images/services/paint-protection-ceramics3.jpg',
        big: 'assets/images/services/paint-protection-ceramics3.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-ceramics4.jpg',
        medium: 'assets/images/services/paint-protection-ceramics4.jpg',
        big: 'assets/images/services/paint-protection-ceramics4.jpg'
      }
    ];
  }
}
