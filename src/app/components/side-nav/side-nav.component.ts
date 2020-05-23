import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';


@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  console = console;

  constructor(
    private resizeListenerService: ResizeListenerService,
  ){

  }

  ngOnInit(): void {
    this.resizeListenerService.subscribe((data) => {
      switch(data){
      case 0:
        // this.width = "300px";
        break;
      default:

      }
    })
  }

}
