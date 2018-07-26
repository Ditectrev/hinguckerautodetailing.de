import {Component, Input, OnChanges} from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnChanges {
  visibleImages: any[] = [];

  // Create an input.
  @Input() filterBy?: string = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
