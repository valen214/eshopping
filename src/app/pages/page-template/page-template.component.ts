import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewContainerRef,
  ViewChildren,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';

@Component({
  selector: 'page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements AfterViewInit  {

  mobile: boolean;
  openSideNav: boolean;


  topNavHeight: string | number;

  constructor(
    private resizeListenerService: ResizeListenerService,
  ){
    this.resizeListenerService.subscribe((i) => {
      this.mobile = i == 0;
    });
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  log(...args){
    console.log(...args);
    return false;
  }
}
