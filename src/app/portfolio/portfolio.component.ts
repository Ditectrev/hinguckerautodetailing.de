import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageService} from '../shared/image.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnChanges, OnInit {
  visibleImages: any[] = [];

  // Create an input.
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService, private spinner: NgxSpinnerService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
    // Show spinner for 2 seconds.
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
