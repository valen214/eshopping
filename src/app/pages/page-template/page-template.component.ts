import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewContainerRef,
  ViewChildren,
  ElementRef,
  ViewChild,
  Directive
} from '@angular/core';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';

@Component({
  selector: 'page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements OnInit  {
  private sideNav: HTMLElement;

  private _sideNav: SideNavComponent;
  @ViewChild("sideNav") set s(elem: SideNavComponent){
    setTimeout(() => {
      this._sideNav = elem;
      console.log(elem);
    }, 0);
  }

  mobile: boolean = true;
  openSideNav: boolean;
  openUserPanel: boolean;


  topNavHeight: number;

  constructor(
    private resizeListenerService: ResizeListenerService,
    private elemRef: ElementRef,
  ){
    this.resizeListenerService.subscribe((i) => {
      if(i == 0){
        if(!this.mobile){
          if(this.sideNav){
            this.sideNav.classList.remove("mobile");
            setTimeout(() => {
              this.sideNav.classList.add("mobile");
            }, 15);
          }
        }
        this.openSideNav = false;
      } else{
        this.sideNav.classList.remove("mobile");
      }
      this.mobile = i == 0;
    });
  }

  ngOnInit(): void {
    this.sideNav = this.elemRef.nativeElement.querySelector(".side-nav");
    if(this.mobile){
      this.sideNav.classList.add("mobile");
    }
  }

  log(...args){
    console.log(...args);
    return false;
  }
}
