import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
TODO: polish API as the following
https://material.angular.io/cdk/layout/overview


*/

const BREAKPOINTS = [ 0, 576, 768, 992, 1200 ];

const CONTAINER_STYLE = `
  display: block;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
  background: rgba(0, 0, 0, 0);
  width: 100vw;
  height: 1px;
  overflow: hidden;
`;


@Injectable({
  providedIn: 'root'
})
export class ResizeListenerService {

  private behaviourSubject = new BehaviorSubject(0);

  private container: HTMLElement = document.createElement("div");
  private elem: HTMLElement = document.createElement("div");
  private observer: IntersectionObserver;

  constructor(){
    this.container.style.cssText = CONTAINER_STYLE;

    const max_breakpoint = BREAKPOINTS[BREAKPOINTS.length - 1];
    const breakpoints_ratios = BREAKPOINTS.map(v => v/max_breakpoint);

    Object.assign(this.elem.style, {
        width: max_breakpoint + "px",
        height: "1px"
    });

    this.container.appendChild(this.elem);
    document.body.appendChild(this.container);
    console.log("resize listener breakpoints", breakpoints_ratios);

    this.observer = new IntersectionObserver((entries, observer) => {
      let i: number = breakpoints_ratios.length;
      let current_ratio = entries[0].intersectionRatio;

      while(i >= 0){
        if(current_ratio >= breakpoints_ratios[i]){
          break;
        }
        --i;
      }

      console.log(`current ratio: ${current_ratio}, i: ${i}`);

      this.next(i);
    }, {
      threshold: breakpoints_ratios
    });
    this.observer.observe(this.elem);
}

  private next(i: number){
    this.behaviourSubject.next(i);
  }

  subscribe(next?: (value: number) => void){
    this.behaviourSubject.subscribe(next)
  }

  stop(){
    this.observer.unobserve(this.elem);
  }
}
