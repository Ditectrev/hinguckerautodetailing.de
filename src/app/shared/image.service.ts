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
    'id': 1,
    'category': 'luxury',
    'title': 'MERCEDES C 63S AMG',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury1.jpg',
    'gallery_url': 'mercedes-c-63s-amg'
  },
  {
    'id': 2,
    'category': 'luxury',
    'title': 'TESLA MODEL S 85',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury2.jpg',
    'gallery_url': 'tesla-model-s-85'
  },
  {
    'id': 3,
    'category': 'luxury',
    'title': 'BMW GT',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury3.jpg',
    'gallery_url': 'bmw-gt'
  },
  {
    'id': 4,
    'category': 'luxury',
    'title': 'AUDI S8 V8 T',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury4.jpg',
    'gallery_url': 'audi-s8-v8-t'
  },
  {
    'id': 5,
    'category': 'luxury',
    'title': 'ROLLS ROYCE CORNICHE IV',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury5.jpg',
    'gallery_url': 'rolls-royce-corniche-iv'
  },
  {
    'id': 6,
    'category': 'old',
    'title': 'PORSCHE 944',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old1.jpg',
    'gallery_url': 'porsche-944'
  },
  {
    'id': 7,
    'category': 'old',
    'title': 'MERCEDES W111 220SEb Coupé 1965',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old2.jpg',
    'gallery_url': 'mercedes-w111-220seb-coupe-1965'
  },
  {
    'id': 8,
    'category': 'old',
    'title': 'CITROËN DS CABRIO',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old3.jpg',
    'gallery_url': 'citroen-ds-cabrio'
  },
  {
    'id': 9,
    'category': 'old',
    'title': 'JAGUAR E TYPE V12 - 1973',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old4.jpg',
    'gallery_url': 'jaguar-e-type-v12-1973'
  },
  {
    'id': 10,
    'category': 'old',
    'title': 'VW Käfer - 1965',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old5.jpg',
    'gallery_url': 'vw-kafer-1965'
  },
  {
    'id': 11,
    'category': 'old',
    'title': 'JAGUAR XJ6',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/old6.jpg',
    'gallery_url': 'jaguar-xj6'
  },
  {
    'id': 12,
    'category': 'sport',
    'title': 'FORD MUSTANG V COUPE',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport1.jpg',
    'gallery_url': 'ford-mustang-v-coupe'
  },
  {
    'id': 13,
    'category': 'sport',
    'title': 'MASERATI GRANTURISMO 2007',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport2.jpg',
    'gallery_url': 'maserati-granturismo-2007'
  },
  {
    'id': 14,
    'category': 'sport',
    'title': 'LAMBORGHINI GALLARDO LP 570-4 PERFORMANTE',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport3.jpg',
    'gallery_url': 'lamborghini-gallardo-lp-570-4-performante'
  },
  {
    'id': 15,
    'category': 'sport',
    'title': 'AUDI TT RS',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport4.jpg',
    'gallery_url': 'audi-tt-rs'
  },
  {
    'id': 16,
    'category': 'sport',
    'title': 'FERRARI 612 SCAGLIETTI',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport5.jpg',
    'gallery_url': 'ferrari-612-scaglietti'
  },
  {
    'id': 17,
    'category': 'sport',
    'title': 'AUDI R8',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport6.jpg',
    'gallery_url': 'audi-r8'
  },
  {
    'id': 18,
    'category': 'sport',
    'title': 'CORVETTE Z06',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/sport7.jpg',
    'gallery_url': 'corvette-z06'
  },
  {
    'id': 19,
    'category': 'suv',
    'title': 'AUDI SQ5',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv1.jpg',
    'gallery_url': 'audi-sq5'
  },
  {
    'id': 20,
    'category': 'suv',
    'title': 'TESLA X',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv2.jpg',
    'gallery_url': 'tesla-x'
  },
  {
    'id': 21,
    'category': 'suv',
    'title': 'RANGE ROVER',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv3.jpg',
    'gallery_url': 'range-rover'
  },
  {
    'id': 22,
    'category': 'suv',
    'title': 'RANGE ROVER SUPERCHARGED AUTOBIOGRAPHY',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv4.jpg',
    'gallery_url': 'range-rover-supercharged-autobiography'
  },
  {
    'id': 23,
    'category': 'suv',
    'title': 'INFINITI QX70S',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv5.jpg',
    'gallery_url': 'infiniti-qx70s'
  },
  {
    'id': 24,
    'category': 'suv',
    'title': 'VOLVO XC90',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv6.jpg',
    'gallery_url': 'volvo-xc90'
  },
  {
    'id': 25,
    'category': 'suv',
    'title': 'MERCEDES VITO',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/suv7.jpg',
    'gallery_url': 'mercedes-vito'
  },
  {
    'id': 26,
    'category': 'van',
    'title': 'MERCEDES G63 AMG',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/van1.jpg',
    'gallery_url': 'mercedes-g63-amg'
  },
  {
    'id': 27,
    'category': 'van',
    'title': 'VW MULTIVAN BLACK & WHITE',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/van2.jpg',
    'gallery_url': 'vw-multivan-black-white'
  },
  {
    'id': 28,
    'category': 'other',
    'title': 'LKW - Gründliche Reinigung des Innenraums',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/other1.jpg',
    'gallery_url': 'lkw-grundliche-reinigung-des-innenraums'
  },
  {
    'id': 29,
    'category': 'other',
    'title': 'FLUGZEUG',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/other2.jpg',
    'gallery_url': 'flugzeug'
  },
  {
    'id': 30,
    'category': 'other',
    'title': 'MERCEDES SPRINTER',
    'description': 'Klicken Sie hier, um die Fotogalerie zu sehen',
    'photo_url': 'assets/images/gallery/other3.jpg',
    'gallery_url': 'mercedes-sprinter'
  },
  {
    'id': 31,
    'category': 'normal',
    'title': 'BMW 330CI E46',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal1.jpg',
    'gallery_url': 'bmw-330ci-e46'
  },
  {
    'id': 32,
    'category': 'normal',
    'title': 'FORD FIESTA MK4',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal2.jpg',
    'gallery_url': 'ford-fiesta-mk4'
  },
  {
    'id': 33,
    'category': 'normal',
    'title': 'GOLF 4 GTI',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal3.jpg',
    'gallery_url': 'golf-iv-gti'
  },
  {
    'id': 34,
    'category': 'normal',
    'title': 'KIA CEED GT',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal4.jpg',
    'gallery_url': 'kia-ceed-gt'
  },
  {
    'id': 35,
    'category': 'normal',
    'title': 'OPEL ZAFIRA',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal5.jpg',
    'gallery_url': 'opel-zafira'
  },
  {
    'id': 36,
    'category': 'normal',
    'title': 'SKODA FABIA',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/normal6.jpg',
    'gallery_url': 'skoda-fabia'
  },
  {
    'id': 37,
    'category': 'other',
    'title': 'KAWASAKI ZX10R NINJA',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/other4.jpg',
    'gallery_url': 'kawasaki-zx10r-ninja'
  },
  {
    'id': 38,
    'category': 'other',
    'title': 'CAMPER',
    'description': 'Klicken Sie hier, um die Galerie zu sehen',
    'photo_url': 'assets/images/gallery/other5.jpg',
    'gallery_url': 'camper'
  }
];
