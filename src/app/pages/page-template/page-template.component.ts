import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewContainerRef,
  ViewChildren,
  ElementRef,
  ViewChild,
  Directive,
  Input
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

  get shoppingCartTransformOrigin(){
    return 'calc(100% - 16px - 20px - 40px) ' +
        (- this.topNavHeight / 2).toString() + 'px';
  }
  get userPanelTransformOrigin(){
    return 'calc(100% - 16px - 20px) ' +
        (this.topNavHeight / 2).toString() + 'px';
  }


  mobile: boolean = true;

  private _openSideNav: boolean;
  get openSideNav(){ return this._openSideNav; }
  @Input() set openSideNav(value: boolean){
    this._openSideNav = value;
    if(this._openSideNav){
      this._openUserPanel = false;
      this._openShoppingCart = false;
    }
  }
  
  private _openShoppingCart: boolean;
  get openShoppingCart(){ return this._openShoppingCart; }
  @Input() set openShoppingCart(value: boolean){
    this._openShoppingCart = value;
    if(this._openShoppingCart){
      this._openUserPanel = false;
      this._openSideNav = false;
    }
  }
  
  private _openUserPanel: boolean;
  get openUserPanel(){ return this._openUserPanel; }
  @Input() set openUserPanel(value: boolean){
    this._openUserPanel = value;
    if(this.openUserPanel){
      if(this.mobile){
        this._openSideNav = false;
      }
      this._openShoppingCart = false;
    }
  }
  

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
      } else if(this.sideNav){
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
