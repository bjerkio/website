import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BjerkHeaderComponent } from '../../bjerk-design/bjerk-header/bjerk-header.component';
import { TimelineMax } from 'gsap/TweenMax';
import { PageCompetenciesComponent } from '../../page-competencies/page-competencies.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy {
  textRenderSubscription: Subscription;
  constructor(private el: ElementRef) { }

  ngOnInit() {
      this.textRenderSubscription = PageCompetenciesComponent.textRendered.subscribe( loaded => {
      if (loaded) {
        this.animate();
      }
    });
  }
  ngOnDestroy() {
    if (this.textRenderSubscription) {
      this.textRenderSubscription.unsubscribe();
    }
  }
  animate() {
    const line = this.el.nativeElement.querySelector('.cls-1');
    const circles = this.el.nativeElement.querySelectorAll('circle');
    const queue = new TimelineMax()
    .staggerTo(circles, .2, {opacity: 1}, .2)
    .to(line, .5, {strokeDashoffset: 0});

  }


}
