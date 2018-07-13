import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) {
    iconRegistry.addSvgIcon(
        'bjerk-menu',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/bjerk-menu.svg'));
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }
  scrollToTop() {
    if (!window.scrollY) {
      return;
    }
    window.scrollTo(0, 0);
  }
}
