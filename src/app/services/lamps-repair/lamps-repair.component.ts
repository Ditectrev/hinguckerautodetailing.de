import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-lamps-repair',
  templateUrl: './lamps-repair.component.html',
  styleUrls: ['./lamps-repair.component.scss']
})
export class LampsRepairComponent implements OnInit {
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
        small: 'assets/images/services/lamps1.jpg',
        medium: 'assets/images/services/lamps1.jpg',
        big: 'assets/images/services/lamps1.jpg'
      },
      {
      small: 'assets/images/services/lamps2.jpg',
      medium: 'assets/images/services/lamps2.jpg',
      big: 'assets/images/services/lamps2.jpg'
      },
      {
        small: 'assets/images/services/lamps3.jpg',
        medium: 'assets/images/services/lamps3.jpg',
        big: 'assets/images/services/lamps3.jpg'
      },
      {
        small: 'assets/images/services/lamps4.jpg',
        medium: 'assets/images/services/lamps4.jpg',
        big: 'assets/images/services/lamps4.jpg'
      }
    ];
  }
}
