import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { UserService } from '../servicies/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss']
})
export class PageTeamComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  userList: UserInterface[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  getUsers(): void {
    this.userSubscription = this.userService.getUsers().subscribe( (users: UserInterface[]) => this.userList = users);
  }

}
