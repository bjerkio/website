import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bjerk-navigation',
  templateUrl: './bjerk-navigation.component.html',
  styleUrls: ['./bjerk-navigation.component.scss']
})
export class BjerkNavigationComponent implements OnInit {

  showMobile = false;

  constructor() { }

  showMobileNav() {
    this.showMobile = this.showMobile ? false : true;
  }

  ngOnInit() {
  }

}
