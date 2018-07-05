import { Component, OnInit, OnDestroy } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ContentMarketingInterface } from '../interfaces/content-marketing.interface';
import { ContentMarcetingService } from '../servicies/content-marketing/content-marketing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnDestroy {
  cardLinks: ContentMarketingInterface[] = [];
  appoloSubscriber: Subscription;
  cardLinkSubscriber: Subscription;

  constructor(apollo: Apollo, private cardLinkService: ContentMarcetingService) {
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

}
