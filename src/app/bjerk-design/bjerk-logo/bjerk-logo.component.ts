import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bjerk-logo',
  templateUrl: './bjerk-logo.component.html',
  styleUrls: ['./bjerk-logo.component.scss']
})
export class BjerkLogoComponent implements OnInit {
  @Input() height = 2.125;
  @Input() inverted = false;

  constructor() {

  }

  getLogoPath() {
    return this.inverted ? 'assets/bjerk-logo-negative.svg' : 'assets/bjerk-logo.svg';
  }

  ngOnInit() {
  }

}
