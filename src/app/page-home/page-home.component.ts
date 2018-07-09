import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ContentMarketingInterface } from '../interfaces/content-marketing.interface';
import { ContentMarcetingService } from '../servicies/content-marketing/content-marketing.service';
import { Utils } from '../helpers/utils';
import {  TimelineMax } from 'gsap/TweenMax';
import { Subscription } from 'rxjs';
import { BjerkHeaderComponent } from '../bjerk-design/bjerk-header/bjerk-header.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnDestroy {
  cardLinks: ContentMarketingInterface[] = [];
  animationSubscription: Subscription;
  appoloSubscriber: Subscription;
  cardLinkSubscriber: Subscription;

  constructor(apollo: Apollo, private cardLinkService: ContentMarcetingService, private el: ElementRef) {
    this.appoloSubscriber = apollo
      .query({
        query: gql`
          {
            Slider(slug: "bjerk-big-b") {
              slug
            }
          }
        `,
      })
      .subscribe(console.log);
  }

  ngOnInit() {
    BjerkHeaderComponent.animationLogger.subscribe(headerLoaded => {
      if (headerLoaded) {
        this.animate();
      }
    });
    this.getCardLinks();
  }

  ngOnDestroy() {
    if (this.appoloSubscriber) {
      this.appoloSubscriber.unsubscribe();
    }
    if (this.cardLinkSubscriber) {
      this.cardLinkSubscriber.unsubscribe();
    }
  }

  private getCardLinks(): void {
    this.cardLinkService.getItems().subscribe(cardLinks => this.cardLinks = cardLinks);
  }

  animate() {
    const slogan: HTMLElement = this.el.nativeElement.querySelector('.slogan');
    const svg = this.el.nativeElement.querySelector('svg');
    const {wrappedText, originalText} = Utils.wrappText(slogan);
    slogan.innerHTML = wrappedText;
    const queue = new TimelineMax()
      .to(svg, 0, {opacity: 1})
      .fromTo(svg.querySelector('path.cls-1'), 1, { opacity: 0, scaleX: .1}, {opacity: 1, scaleX: 1})
      .to(slogan, 0, {opacity: 1})
      .staggerFromTo(slogan.querySelectorAll('.wrapped'), .05, {
        x: -20,
        y: -40,
        display: 'inline-block',
        opacity: 0
      }, {
        x: 0,
        y: 0,
        opacity: 1
      }, .05);
  }

}
