import { Component, OnInit, ElementRef } from '@angular/core';
declare let ScrollMagic: any;

@Component({
  selector: 'app-principles-page',
  templateUrl: './principles-page.component.html',
  styleUrls: ['./principles-page.component.scss']
})
export class PrinciplesPageComponent implements OnInit {
  sceneController: any;
  isScrollOnBirch =  false;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sceneController = new ScrollMagic.Controller();
    this.animateBirch();
  }
  animateBirch() {
    const birchBlock: HTMLElement = this.el.nativeElement.querySelector('.bjerk-visual');
    const bjerkTree: HTMLElement = birchBlock.querySelector('#Group_118');
    const treeTransform: string = bjerkTree.getAttribute('transform');
    const treeXPosition: {x: number, y: number}  = this.parseTransform(treeTransform);
    const birchBg = birchBlock.querySelector('#Path_84');
    const defaultBgTranslate = birchBg.getAttribute('transform');
    const {top: birchTop, bottom: birchBottom, height} = birchBlock.getBoundingClientRect();
    const birchScene = new ScrollMagic.Scene({
      triggerElement: birchBlock,
      duration: height,
      offset: 300
    })
    .addTo(this.sceneController)
    .on('progress', (e) => {
      if (!e.progress || e.progress === 1 || window.innerWidth < 1200) {
        return;
      }
      const translateBGValue = (e.progress.toFixed(3) * 100 + 20).toString();
      birchBg.setAttribute('transform', defaultBgTranslate.replace(/\d/, translateBGValue));
      const x: number = this.parseTransform(treeTransform).x;
      const y = this.parseTransform(treeTransform).y;

      bjerkTree.setAttribute('transform', `translate(${x - (e.progress * 40)} ${y})`);
    });
  }

  parseTransform(transform: string): {x: number, y: number} {
    const [x, y] = (/[0-9,.]+\s[0-9,.]+/).exec(transform)[0].split(' ');
    return {
      x: parseFloat(x),
      y: parseFloat(y)};
  }

}
