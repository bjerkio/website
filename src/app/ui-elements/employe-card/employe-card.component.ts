import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-employe-card',
  templateUrl: './employe-card.component.html',
  styleUrls: ['./employe-card.component.scss']
})
export class EmployeCardComponent implements OnInit {
  @Input()
  user: UserInterface;
  parsedRole: string;
  constructor() { }

  ngOnInit() {
    this.parseEmloyeRole();
  }

  parseEmloyeRole() {
    if (this.user.role.length > 1) {
      this.parsedRole = this.user.role.reduce((total, role: string) => total += role + ' / ', '');
    } else {
      this.parsedRole = this.user.role[0];
    }
  }

  phoneToLink(): string {
    return this.user.phone.replace(/\s/g, '');
  }

}
