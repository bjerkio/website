import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { TimelineMax } from 'gsap/TweenMax';
import { Subscription } from 'rxjs';
import { BjerkHeaderComponent } from '../bjerk-design/bjerk-header/bjerk-header.component';
import { Utils } from '../helpers/utils';
import { BehaviorSubject } from 'rxjs/index';
declare let ScrollMagic: any;
declare let Bounce: any;
declare let TweenMax: any;

@Component({
  selector: 'app-page-competencies',
  templateUrl: './page-competencies.component.html',
  styleUrls: ['./page-competencies.component.scss']
})
export class PageCompetenciesComponent implements OnInit, OnDestroy {
  static textRendered: BehaviorSubject<boolean> = new BehaviorSubject(null);
  headerSubscription: Subscription;
  sceneController: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sceneController = new ScrollMagic.Controller();
    this.headerSubscription = BjerkHeaderComponent.animationLogger.subscribe( loaded => {
      if (loaded) {
        this.animate();
      }
    });
  }
  ngOnDestroy() {
    if (this.headerSubscription) {
      this.headerSubscription.unsubscribe();
    }
    PageCompetenciesComponent.textRendered.next(false);
  }
  animate() {
    const title: HTMLElement = this.el.nativeElement.querySelector('.hero__title');
    const {originalText, wrappedText} = Utils.wrappText(title);
    title.innerHTML = wrappedText;
    const queue = new TimelineMax()
    .to(title, 0, {opacity: 1})
    .staggerFromTo(title.querySelectorAll('.wrapped'), .05, {
      opacity: 0,
      display: 'inline-block',
      scaleY: 1.5,
      scaleX: 1.5
    }, {
      opacity: 1,
      scaleY: 1,
      scaleX: 1
    }, .05).call( () => {
      PageCompetenciesComponent.textRendered.next(true);
    });

    const weGot = new ScrollMagic.Scene({
      triggerElement: '.formated-text'
    })
    .setTween(
      TweenMax.fromTo('.formated-text__we-got', 1.5, {
        x: '30%',
        opacity: 0,
        rotationX: 90
      }, {
        x: '30%',
        opacity: 1,
        rotationX: 0,
        ease: Bounce.easeOut})
    )
    .addTo(this.sceneController);
  }

}
