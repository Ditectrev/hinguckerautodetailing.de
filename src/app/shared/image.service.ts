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
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1237425466311890'
  },
  {
    'id': 2,
    'category': 'luxury',
    'title': 'TESLA MODEL S 85',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1141021795952258'
  },
  {
    'id': 3,
    'category': 'luxury',
    'title': 'BMW GT',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1486680901386344'
  },
  {
    'id': 4,
    'category': 'luxury',
    'title': 'AUDI S8 V8 T',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury4.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1673281262726306'
  },
  {
    'id': 5,
    'category': 'luxury',
    'title': 'ROLLS ROYCE CORNICHE IV',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/luxury5.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1649820998405666'
  },
  {
    'id': 6,
    'category': 'old',
    'title': 'PORSCHE 944',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1356854571035645'
  },
  {
    'id': 7,
    'category': 'old',
    'title': 'MERCEDES W111 220SEb Coupé 1965',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1363059197081849'
  },
  {
    'id': 8,
    'category': 'old',
    'title': 'CITROËN DS CABRIO',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1353099074744528'
  },
  {
    'id': 9,
    'category': 'old',
    'title': 'JAGUAR E TYPE V12 - 1973',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old4.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1260887410632362'
  },
  {
    'id': 10,
    'category': 'old',
    'title': 'VW Käfer - 1965',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old5.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1241569985897438'
  },
  {
    'id': 11,
    'category': 'old',
    'title': 'JAGUAR XJ6',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/old6.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1641210852600014'
  },
  {
    'id': 12,
    'category': 'other',
    'title': 'MERCEDES SPRINTER',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/other1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1651895291531570'
  },
  {
    'id': 13,
    'category': 'other',
    'title': 'BMW E39 520I',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/other2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1055453714509067'
  },
  {
    'id': 14,
    'category': 'other',
    'title': 'FLUGZEUG',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/other3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1820993177955113'
  },
  {
    'id': 15,
    'category': 'sport',
    'title': 'FORD MUSTANG V COUPE',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1048199068567865'
  },
  {
    'id': 16,
    'category': 'sport',
    'title': 'MASERATI GRANTURISMO 2007',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1202664013121369'
  },
  {
    'id': 17,
    'category': 'sport',
    'title': 'LAMBORGHINI GALLARDO LP 570-4 PERFORMANTE',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1390468131007622'
  },
  {
    'id': 18,
    'category': 'sport',
    'title': 'AUDI TT RS',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport4.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1412316138822821'
  },
  {
    'id': 19,
    'category': 'sport',
    'title': 'FERRARI 612 SCAGLIETTI',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport5.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1442756569112111'
  },
  {
    'id': 20,
    'category': 'sport',
    'title': 'AUDI R8',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport6.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1471134382940996'
  },
  {
    'id': 21,
    'category': 'sport',
    'title': 'CORVETTE Z06',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/sport7.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1761189917268773'
  },
  {
    'id': 22,
    'category': 'suv',
    'title': 'AUDI SQ5',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1425424997511935'
  },
  {
    'id': 23,
    'category': 'suv',
    'title': 'TESLA X',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1234364629951307'
  },
  {
    'id': 24,
    'category': 'suv',
    'title': 'RANGE ROVER',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1367277213326714'
  },
  {
    'id': 25,
    'category': 'suv',
    'title': 'RANGE ROVER SUPERCHARGED AUTOBIOGRAPHY',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv4.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1071476126240159'
  },
  {
    'id': 26,
    'category': 'suv',
    'title': 'INFINITI QX70S',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv5.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1087451324642639'
  },
  {
    'id': 27,
    'category': 'suv',
    'title': 'VOLVO XC90',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/suv6.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1531154766938957'
  },
  {
    'id': 28,
    'category': 'van',
    'title': 'MERCEDES G63 AMG',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/van1.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1626748550712911'
  },
  {
    'id': 29,
    'category': 'van',
    'title': 'VW MULTIVAN BLACK & WHITE',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/van2.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1085824391471999'
  },
  {
    'id': 30,
    'category': 'van',
    'title': 'MERCEDES VITO',
    'description': 'Klicken Sie hier, um die Facebook-Galerie zu sehen',
    'photo_url': 'assets/images/gallery/van3.jpg',
    'gallery_url': 'https://www.facebook.com/pg/HinguckerAutoDetailing/photos/?tab=album&album_id=1242128302508273'
  }
];
