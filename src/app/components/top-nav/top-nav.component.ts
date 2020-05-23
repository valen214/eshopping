import { Component, OnInit, ElementRef, Input, ContentChildren, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavComponent implements OnInit {
  @Output() height = new EventEmitter();

  console = window.console;

  openUserMenu: boolean = false;

  @Input() openSideNav: boolean = false;
  @Output() openSideNavChange = new EventEmitter();

  constructor(
    private elemRef: ElementRef,
    private resizeListenerService: ResizeListenerService,
  ){
    this.console = window.console;
    this.resizeListenerService.subscribe(i => {
      let height = this.elemRef.nativeElement.getBoundingClientRect().height;
      this.height.emit(height + "px");
    })
  }

  ngOnInit(): void {
    let height = this.elemRef.nativeElement.getBoundingClientRect().height;
    this.height.emit(height + "px");
  }

  toggleUserMenu(){
    console.log(this.openUserMenu);
    this.openUserMenu = !this.openUserMenu;
  }
  toggleSideNav(){
    this.openSideNav = !this.openSideNav;
    this.openSideNavChange.emit(this.openSideNav);
  }
}
