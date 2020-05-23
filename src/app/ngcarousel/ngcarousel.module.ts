import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow/slideshow.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    SlideshowComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SlideshowComponent
  ]
})
export class NGCarouselModule { }
