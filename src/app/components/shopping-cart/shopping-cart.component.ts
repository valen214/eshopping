import {
  Component, OnInit, ViewEncapsulation, Input
} from '@angular/core';
import { ProductCartService } from 'src/app/services/product-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingCartComponent implements OnInit {

  @Input() width = "100vw";
  @Input() height = "30vh";

  get styleObj(){
    return {
      width: this.width,
      height: this.height,
    }
  }

  constructor(
    public productCartService: ProductCartService
  ){}

  ngOnInit(): void {
  }
}
