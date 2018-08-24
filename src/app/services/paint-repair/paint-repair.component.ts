import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-paint-repair',
  templateUrl: './paint-repair.component.html',
  styleUrls: ['./paint-repair.component.scss']
})
export class PaintRepairComponent implements OnInit {
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
        small: 'assets/images/services/paint-repair1.jpg',
        medium: 'assets/images/services/paint-repair1.jpg',
        big: 'assets/images/services/paint-repair1.jpg'
      },
      {
        small: 'assets/images/services/paint-repair2.jpg',
        medium: 'assets/images/services/paint-repair2.jpg',
        big: 'assets/images/services/paint-repair2.jpg'
      },
      {
        small: 'assets/images/services/paint-repair3.jpg',
        medium: 'assets/images/services/paint-repair3.jpg',
        big: 'assets/images/services/paint-repair3.jpg'
      },
      {
        small: 'assets/images/services/paint-repair4.jpg',
        medium: 'assets/images/services/paint-repair4.jpg',
        big: 'assets/images/services/paint-repair4.jpg'
      }
    ];
  }
}
