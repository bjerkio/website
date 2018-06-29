import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../servicies/user/user.service';
import { UserInterface } from '../../interfaces/user.interface';
import { ContentMarketingInterface } from '../../interfaces/content-marketing.interface';

@Component({
  selector: 'link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {
  @Input()
  cardLink: ContentMarketingInterface;
  userData: UserInterface;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.userService.getUser(this.cardLink.userId).subscribe( user => this.userData = user);
  }

}
