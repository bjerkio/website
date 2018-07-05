import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../servicies/user/user.service';
import { UserInterface } from '../../interfaces/user.interface';
import { ContentMarketingInterface } from '../../interfaces/content-marketing.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit, OnDestroy {
  @Input()
  cardLink: ContentMarketingInterface;
  userData: UserInterface;
  userSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserInfo(): void {
    this.userSubscription = this.userService.getUser(this.cardLink.userId).subscribe( user => this.userData = user);
  }

}
