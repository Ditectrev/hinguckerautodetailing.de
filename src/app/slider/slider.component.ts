import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
