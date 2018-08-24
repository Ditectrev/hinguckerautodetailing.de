import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-detailling-interior-standard',
  templateUrl: './detailling-interior-standard.component.html',
  styleUrls: ['./detailling-interior-standard.component.scss']
})
export class DetaillingInteriorStandardComponent implements OnInit {
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
        small: 'assets/images/services/detailling-interior-standard1.jpg',
        medium: 'assets/images/services/detailling-interior-standard1.jpg',
        big: 'assets/images/services/detailling-interior-standard1.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-standard2.jpg',
        medium: 'assets/images/services/detailling-interior-standard2.jpg',
        big: 'assets/images/services/detailling-interior-standard2.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-standard3.jpg',
        medium: 'assets/images/services/detailling-interior-standard3.jpg',
        big: 'assets/images/services/detailling-interior-standard3.jpg'
      },
      {
        small: 'assets/images/services/detailling-interior-standard4.jpg',
        medium: 'assets/images/services/detailling-interior-standard4.jpg',
        big: 'assets/images/services/detailling-interior-standard4.jpg'
      }
    ];
  }
}
