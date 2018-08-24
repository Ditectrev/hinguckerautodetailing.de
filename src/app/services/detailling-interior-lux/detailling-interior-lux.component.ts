import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-detailling-interior-lux',
  templateUrl: './detailling-interior-lux.component.html',
  styleUrls: ['./detailling-interior-lux.component.scss']
})
export class DetaillingInteriorLuxComponent implements OnInit {
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
        small: 'assets/images/services/detailling-interior-lux1.jpg',
        medium: 'assets/images/services/detailling-interior-lux1.jpg',
        big: 'assets/images/services/detailling-interior-lux1.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-lux2.jpg',
        medium: 'assets/images/services/detailling-interior-lux2.jpg',
        big: 'assets/images/services/detailling-interior-lux2.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-lux3.jpg',
        medium: 'assets/images/services/detailling-interior-lux3.jpg',
        big: 'assets/images/services/detailling-interior-lux3.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-lux4.jpg',
        medium: 'assets/images/services/detailling-interior-lux4.jpg',
        big: 'assets/images/services/detailling-interior-lux4.jpg'
      }
    ];
  }
}
