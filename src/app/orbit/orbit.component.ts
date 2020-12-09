import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.css']
})
export class OrbitComponent implements OnInit {

  myInterval = 3000;
  activeSlideIndex = 0;

  slides: any = [
    {
      src: 'https://baconmockup.com/400/200',
      alt: `Yummy Bacon`,
      caption: `Slide Bacon`
    },
    {
      src: 'https://baconmockup.com/401/200',
      alt: `Tasty Bacon`,
      caption: `Slide More Bacon`
    },
    {
      src: 'https://baconmockup.com/402/200',
      alt: `Scrumptous Bacon`,
      caption: `Slide Even More Bacon`
    }
  ];

  constructor(
    sanitizer: DomSanitizer
  ) {
     this.slides = this.slides.map((slide: any) => ({
      src: slide.src,
      alt: slide.alt,
      caption: sanitizer.sanitize(SecurityContext.HTML, slide.caption)
   }

  ngOnInit() {
  }

}