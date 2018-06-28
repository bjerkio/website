import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { CardLinkService } from '../servicies/card-link/card-link.service';
import { CardLinkInterface } from '../interfaces/card-link.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  cardLinks: CardLinkInterface[] = [];

  constructor(apollo: Apollo, private cardLinkService: CardLinkService) {
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

  private getCardLinks():void {
    this.cardLinkService.getItems().subscribe(cardLinks => this.cardLinks = cardLinks);
  }

}
