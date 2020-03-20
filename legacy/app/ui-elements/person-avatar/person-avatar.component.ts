import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-avatar',
  templateUrl: './person-avatar.component.html',
})
export class PersonAvatarComponent implements OnInit {
  @Input()
  imagePath: string;
  @Input()
  alt: string;

  // adittional class
  @Input()
  className: string;

  // size of avatar: sm (small) md: (medium) lg: (large)
  @Input()
  size: string;
  constructor() { }

  ngOnInit() {
  }
}

