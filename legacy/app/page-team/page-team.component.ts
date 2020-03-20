import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { UserService } from '../servicies/user/user.service';
import { Subscription } from 'rxjs';
import { BjerkHeaderComponent } from '../bjerk-design/bjerk-header/bjerk-header.component';
declare let ScrollMagic: any;
declare let Bounce: any;
declare let TweenMax: any;

@Component({
  selector: 'app-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss']
})
export class PageTeamComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  userList: UserInterface[] = [];
  scrollController;
  headerSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.scrollController = new ScrollMagic.Controller();
    this.getUsers();
    this.headerSubscription = BjerkHeaderComponent.animationLogger.subscribe( loaded => {
      if (!loaded) {
        return;
      }
      this.animateDog();
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }

    if (this.headerSubscription) {
      this.headerSubscription.unsubscribe();
    }
  }
  getUsers(): void {
    this.userSubscription = this.userService.getUsers().subscribe( (users: UserInterface[]) => this.userList = users);
  }

  animateDog() {
    const dogLines = TweenMax.staggerFromTo('.dog .line, .dog .speach', .6, {opacity: 0}, {opacity: 1}, .2);
    const sceneDog = new ScrollMagic.Scene({
      triggerElement: '.dog'
    })
      .setTween(dogLines)
      .addTo(this.scrollController);

      const sceneLogo = new ScrollMagic.Scene({
        triggerElement: '.team__text-content'
      })
        .setTween(
          TweenMax.fromTo('.team-logo__img', 1.5, {
            opacity: 0,
            scale: .1,
            rotation: -45}, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              ease: Bounce.easeOut})
        )
        .addTo(this.scrollController);
  }


}
