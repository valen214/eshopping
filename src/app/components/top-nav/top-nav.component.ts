import {
  Component,
  OnInit,
  ElementRef,
  Input,
  ContentChildren,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import {
  ResizeListenerService
} from 'src/app/resize-listener/resize-listener.service';



@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavComponent implements OnInit {
  @Output() height = new EventEmitter<number> ();

  console = window.console;

  @Input() openSideNav: boolean = false;
  @Output() openSideNavChange = new EventEmitter();

  @Input() openShoppingCart: boolean = false;
  @Output() openShoppingCartChange = new EventEmitter();

  @Input() openUserPanel: boolean = false;
  @Output() openUserPanelChange = new EventEmitter();

  constructor(
    private elemRef: ElementRef,
    private resizeListenerService: ResizeListenerService,
  ){
    this.console = window.console;
    this.resizeListenerService.subscribe(i => {
      this.notifyHeight();
    })
  }

  ngOnInit(): void {
    this.notifyHeight();
  }

  notifyHeight(){
    let elem = this.elemRef.nativeElement;
    let height = elem.getBoundingClientRect().height;
    this.height.emit(height);
  }

  toggleSideNav(){
    this.openSideNav = !this.openSideNav;
    this.openSideNavChange.emit(this.openSideNav);
  }
  toggleShoppingCart(){
    this.openShoppingCart = !this.openShoppingCart;
    this.openShoppingCartChange.emit(this.openShoppingCart);
  }
  toggleUserPanel(){
    this.openUserPanel = !this.openUserPanel;
    this.openUserPanelChange.emit(this.openUserPanel);
  }
}
