import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-paint-protection-wax',
  templateUrl: './paint-protection-wax.component.html',
  styleUrls: ['./paint-protection-wax.component.scss']
})
export class PaintProtectionWaxComponent implements OnInit {
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
        small: 'assets/images/services/paint-protection-wax1.jpg',
        medium: 'assets/images/services/paint-protection-wax1.jpg',
        big: 'assets/images/services/paint-protection-wax1.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-wax2.jpg',
        medium: 'assets/images/services/paint-protection-wax2.jpg',
        big: 'assets/images/services/paint-protection-wax2.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-wax3.jpg',
        medium: 'assets/images/services/paint-protection-wax3.jpg',
        big: 'assets/images/services/paint-protection-wax3.jpg'
      },
      {
        small: 'assets/images/services/paint-protection-wax4.jpg',
        medium: 'assets/images/services/paint-protection-wax4.jpg',
        big: 'assets/images/services/paint-protection-wax4.jpg'
      }
    ];
  }
}
