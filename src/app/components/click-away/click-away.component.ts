import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'click-away-listener',
  templateUrl: './click-away.component.html',
  styleUrls: ['./click-away.component.scss']
})
export class ClickAwayComponent implements OnInit {
  @Input() active: boolean;
  @Output() clickAway = new EventEmitter<void> ();

  constructor() { }

  ngOnInit(): void {
  }
}
