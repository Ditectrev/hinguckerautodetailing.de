import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-leather-cleaning',
  templateUrl: './leather-cleaning.component.html',
  styleUrls: ['./leather-cleaning.component.scss']
})
export class LeatherCleaningComponent implements OnInit {
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
        small: 'assets/images/services/leather-cleaning1.jpg',
        medium: 'assets/images/services/leather-cleaning1.jpg',
        big: 'assets/images/services/leather-cleaning1.jpg'
      },
      {
        small: 'assets/images/services/leather-cleaning2.jpg',
        medium: 'assets/images/services/leather-cleaning2.jpg',
        big: 'assets/images/services/leather-cleaning2.jpg'
      },
      {
        small: 'assets/images/services/leather-cleaning3.jpg',
        medium: 'assets/images/services/leather-cleaning3.jpg',
        big: 'assets/images/services/leather-cleaning3.jpg'
      },
      {
        small: 'assets/images/services/leather-cleaning4.jpg',
        medium: 'assets/images/services/leather-cleaning4.jpg',
        big: 'assets/images/services/leather-cleaning4.jpg'
      }
    ];
  }
}
