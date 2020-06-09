import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() style: String = "";
  @Input() images: ImageBitmap[] | String[];
  imageHostElem: HTMLImageElement;

  private current_index: number = 0;

  constructor(
    private elemRef: ElementRef,
  ){}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if(this.images){
      this.imageHostElem =
          this.elemRef.nativeElement
          .getElementsByClassName("slideshow-image")[0];
      this.setDisplay(0);
    }
  }

  setDisplay(index: number): void {

    if(this.images){
      let img = this.images[index];
      if(typeof img === "string"){
        this.imageHostElem.src = img;
        this.current_index = index;
      }
    }
  }

  previous(): void {
    if(this.images){
      let i = this.current_index - 1;
      if(i < 0) i = this.images.length - 1;
      this.setDisplay(i);
    }
  }
  next(): void {
    if(this.images){
      this.setDisplay((this.current_index + 1) % this.images.length);
    }
  }
}
