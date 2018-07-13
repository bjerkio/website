import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bjerky-bjerk',
  templateUrl: './bjerky-bjerk.component.html',
  styleUrls: ['./bjerky-bjerk.component.css']
})
export class BjerkyBjerkComponent implements OnInit {
  @Input()
  bottomImage: boolean;

  @Input()
  className: string;

  constructor() { }

  ngOnInit() {
  }

  setClass(): string {
    return this.className && this.className.length ? this.className : 'svg';
  }
}
