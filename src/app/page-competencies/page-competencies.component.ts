import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { TimelineMax } from 'gsap/TweenMax';
import { Subscription } from 'rxjs';
import { BjerkHeaderComponent } from '../bjerk-design/bjerk-header/bjerk-header.component';
import { Utils } from '../helpers/utils';
import { BehaviorSubject } from 'rxjs/index';
declare let ScrollMagic: any;
declare let Bounce: any;
declare let TweenMax: any;
declare let SimplybookWidget: any;

@Component({
  selector: 'app-page-competencies',
  templateUrl: './page-competencies.component.html',
  styleUrls: ['./page-competencies.component.scss']
})
export class PageCompetenciesComponent implements OnInit, OnDestroy {
  static textRendered: BehaviorSubject<boolean> = new BehaviorSubject(null);
  headerSubscription: Subscription;
  sceneController: any;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sceneController = new ScrollMagic.Controller();
    this.headerSubscription = BjerkHeaderComponent.animationLogger.subscribe( loaded => {
      if (loaded) {
        this.animate();
      }
    });

    // var widget = new SimplybookWidget({
    //     "widget_type": "contact-button",
    //     "url":"https:\/\/bjerk.simplybook.it",
    //     "theme":"space",
    //     "theme_settings":{
    //       "sb_base_color":"#d42853",
    //       "timeline_show_end_time":"0",
    //       "dark_font_color":"#474747",
    //       "light_font_color":"#ffffff",
    //       "hide_img_mode":"0",
    //       "sb_busy":"#dad2ce",
    //       "sb_available":"#d3e0f1"
    //     },
    //     "timeline":"flexible",
    //     "datepicker":"top_calendar",
    //     "is_rtl":false,
    //     "app_config":{
    //       "predefined":[]
    //     },
    //     "button_title":"Contact Us",
    //     "button_background_color":"#d42853",
    //     "button_text_color":"#ffffff",
    //     "button_position":"right",
    //     "button_position_offset":"55%"
    //   });

  }
  ngOnDestroy() {
    if (this.headerSubscription) {
      this.headerSubscription.unsubscribe();
    }
    PageCompetenciesComponent.textRendered.next(false);
  }
  animate() {
    const title: HTMLElement = this.el.nativeElement.querySelector('.hero__title');
    const {originalText, wrappedText} = Utils.wrappText(title);
    title.innerHTML = wrappedText;
    const queue = new TimelineMax()
    .to(title, 0, {opacity: 1})
    .staggerFromTo(title.querySelectorAll('.wrapped'), .05, {
      opacity: 0,
      display: 'inline-block',
      scaleY: 1.5,
      scaleX: 1.5
    }, {
      opacity: 1,
      scaleY: 1,
      scaleX: 1
    }, .05).call( () => {
      PageCompetenciesComponent.textRendered.next(true);
    });

    const weGot = new ScrollMagic.Scene({
      triggerElement: '.formated-text'
    })
    .setTween(
      TweenMax.fromTo('.formated-text__we-got', 1.5, {
        x: '30%',
        opacity: 0,
        rotationX: 90
      }, {
        x: '30%',
        opacity: 1,
        rotationX: 0,
        ease: Bounce.easeOut})
    )
    .addTo(this.sceneController);
  }

}
