import { Component, OnInit, ElementRef } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ContentMarketingInterface } from '../interfaces/content-marketing.interface';
import { ContentMarcetingService } from '../servicies/content-marketing/content-marketing.service';
import { Utils } from '../helpers/utils';
import {  TimelineMax } from 'gsap/TweenMax';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  cardLinks: ContentMarketingInterface[] = [];

  constructor(apollo: Apollo, private cardLinkService: ContentMarcetingService, private el: ElementRef) {
    apollo
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
    this.getCardLinks();
    this.animate();
  }

  private getCardLinks(): void {
    this.cardLinkService.getItems().subscribe(cardLinks => this.cardLinks = cardLinks);
  }

  animate() {
    const slogan: HTMLElement = this.el.nativeElement.querySelector('.slogan');
    const {wrappedText, originalText} = Utils.wrappText(slogan);
    slogan.innerHTML = wrappedText;
    const queue = new TimelineMax()
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
