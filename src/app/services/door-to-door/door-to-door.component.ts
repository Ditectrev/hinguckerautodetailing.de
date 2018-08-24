import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-door-to-door',
  templateUrl: './door-to-door.component.html',
  styleUrls: ['./door-to-door.component.scss']
})
export class DoorToDoorComponent implements OnInit {
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
        small: 'assets/images/services/door-to-door1.jpg',
        medium: 'assets/images/services/door-to-door1.jpg',
        big: 'assets/images/services/door-to-door1.jpg'
      },
      {
        small: 'assets/images/services/door-to-door2.jpg',
        medium: 'assets/images/services/door-to-door2.jpg',
        big: 'assets/images/services/door-to-door2.jpg'
      },
      {
        small: 'assets/images/services/door-to-door3.jpg',
        medium: 'assets/images/services/door-to-door3.jpg',
        big: 'assets/images/services/door-to-door3.jpg'
      },
      {
        small: 'assets/images/services/door-to-door4.jpg',
        medium: 'assets/images/services/door-to-door4.jpg',
        big: 'assets/images/services/door-to-door4.jpg'
      }
    ];
  }
}
