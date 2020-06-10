import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-template',
  templateUrl: './cms-template.component.html',
  styleUrls: ['./cms-template.component.scss']
})
export class CmsTemplateComponent implements OnInit {

  topNavHeight: number;
  openSideNav: boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

}
