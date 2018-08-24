import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-leather-painting',
  templateUrl: './leather-painting.component.html',
  styleUrls: ['./leather-painting.component.scss']
})
export class LeatherPaintingComponent implements OnInit {
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
        small: 'assets/images/services/leather-painting1.jpg',
        medium: 'assets/images/services/leather-painting1.jpg',
        big: 'assets/images/services/leather-painting1.jpg'
      },
      {
        small: 'assets/images/services/leather-painting2.jpg',
        medium: 'assets/images/services/leather-painting2.jpg',
        big: 'assets/images/services/leather-painting2.jpg'
      },
      {
        small: 'assets/images/services/leather-painting3.jpg',
        medium: 'assets/images/services/leather-painting3.jpg',
        big: 'assets/images/services/leather-painting3.jpg'
      },
      {
        small: 'assets/images/services/leather-painting4.jpg',
        medium: 'assets/images/services/leather-painting4.jpg',
        big: 'assets/images/services/leather-painting4.jpg'
      }
    ];
  }
}
