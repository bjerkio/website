import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  TimelineMax } from 'gsap/TweenMax';
import { BjerkHeaderComponent } from '../bjerk-design/bjerk-header/bjerk-header.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-page-contract',
  templateUrl: './page-contract.component.html',
  styleUrls: ['./page-contract.component.scss']
})
export class PageContractComponent implements OnInit, OnDestroy, AfterViewInit {
  contractForm: FormGroup;
  emailPattern = /^\w{1,}@\w{1,5}\.\w{1,3}/;
  submited: boolean;
  headerAnimSubscription: Subscription;
  constructor(private el: ElementRef) { }

  ngOnInit() {
   this.contractForm =  new FormGroup({
     email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
   });
  }

  ngOnDestroy() {
    if (this.headerAnimSubscription) {
      this.headerAnimSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    this.headerAnimSubscription = BjerkHeaderComponent.animationLogger.subscribe(animEnded => {
      if (animEnded) {
        this.animateBg();
      }
    });
  }
  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.contractForm.value.email);
    const _hsq = window['_hsq'] = window['_hsq'] || [];
    // _hsq.push(['trackEvent', {
    //   id: 'new contact',
    //   value: this.contractForm.value.email
    // }]);
    this.submited = true;
  }

  animateBg() {
    if (window.innerWidth < 1040) {
      return;
    }
    const decoreLine = this.el.nativeElement.querySelector('.form-contract__decore');
    const topImage = this.el.nativeElement.querySelector('.contract-bg__img_top');
    const queueTop = new TimelineMax()
    .staggerFromTo(topImage.querySelectorAll('path, polygon'), .1, {
      y: -20,
      x: 20,
      opacity: 0,
      scale: 0.3
    }, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1
    }, .1);

    const bottomImage = this.el.nativeElement.querySelector('.contract-bg__img_bottom');
    const queueBottom = new TimelineMax()
    .staggerFromTo(bottomImage.querySelectorAll('path, polygon'), .1, {
      y: 20,
      x: 20,
      opacity: 0,
      scale: .3
    }, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1
    }, .1).call(
      () => {
        this.el.nativeElement.querySelector('.form-contract__field').classList.remove('form-contract__field_collapsed');
      }
    );
  }
}
