import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
}

/* Create a JSON object that will hold set of images. */
const IMAGES = [
  {
    "id": 1,
    "category": "kat1",
    "title": "Projekt 1",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio01.jpg"
  },
  {
    "id": 2,
    "category": "kat2",
    "title": "Projekt 2",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio02.jpg"
  },
  {
    "id": 3,
    "category": "kat3",
    "title": "Projekt 3",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio03.jpg"
  },
  {
    "id": 4,
    "category": "kat1",
    "title": "Projekt 4",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio04.jpg"
  },
  {
    "id": 5,
    "category": "kat1",
    "title": "Projekt 5",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio05.jpg"
  },
  {
    "id": 6,
    "category": "kat3",
    "title": "Projekt 6",
    "description": "Klicken Sie hier, um die Facebook-Galerie zu sehen",
    "url": "assets/images/portfolio06.jpg"
  }
];
