import { Component, OnInit, ElementRef } from '@angular/core';
import {  TimelineMax } from 'gsap/TweenMax';



@Component({
  selector: 'app-bjerk-header',
  templateUrl: './bjerk-header.component.html',
  styleUrls: ['./bjerk-header.component.scss']
})
export class BjerkHeaderComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.animate();
  }

  animate() {
    if (sessionStorage.headerLoaded && sessionStorage.headerLoaded.length || window.innerWidth < 600) {
      return;
    }
    const el: HTMLElement = this.el.nativeElement;
    const queue = new TimelineMax()
      .fromTo(el.querySelector('app-bjerk-logo img'), .5, {opacity: 0, x: -50}, {opacity: 1, x: 0}).staggerFromTo(
        el.querySelectorAll('app-bjerk-navigation a'), .1, {opacity: 0, y: -50}, {opacity: 1, y: 0}, .1
      ).call(this.cacheAnimation);
  }

  /* prevent repeating of header animation */
  cacheAnimation() {
    sessionStorage.setItem('headerLoaded', 'loaded');
  }

}
