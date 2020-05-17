import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  @Input() open: boolean;
  @Output() close = new EventEmitter();

  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
  }


  clickAway(){
    this.close.emit(null);
  }
}
