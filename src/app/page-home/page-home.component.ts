import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ContentMarketingInterface } from '../interfaces/content-marketing.interface';
import { ContentMarcetingService } from '../servicies/content-marketing/content-marketing.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  cardLinks: ContentMarketingInterface[] = [];

  constructor(apollo: Apollo, private cardLinkService: ContentMarcetingService) {
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
  }

  private getCardLinks(): void {
    this.cardLinkService.getItems().subscribe(cardLinks => this.cardLinks = cardLinks);
  }

}
