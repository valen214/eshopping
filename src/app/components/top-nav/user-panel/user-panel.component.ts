import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  @Input() open: boolean;
  @Output() openChange = new EventEmitter<boolean> ();

  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
  }
}
