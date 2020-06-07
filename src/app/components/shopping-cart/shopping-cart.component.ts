import {
  Component, OnInit, ViewEncapsulation, Input
} from '@angular/core';
import { ProductCartService, ProductCartItem } from 'src/app/services/product-cart.service';
import { Product } from 'src/app/services/Product';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingCartComponent implements OnInit {

  @Input() width = "100vw";
  @Input() height = "30vh";

  isQuantityForProductInvalid = {}

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

  onInvalidQuantityChange(
      product_id: string,
      invalid: boolean){
    this.isQuantityForProductInvalid[product_id] = invalid;
  }
  onQuantityChange(product_info: ProductCartItem, quantity: string){
    console.log("quantity change");
    if(!this.isQuantityForProductInvalid[product_info.product.id]){
      product_info.quantity = parseInt(quantity, 10);
      console.log("quantity modified");
    }
  }

  deleteItem(product: Product){
    this.productCartService.removeProduct(product);
  }
}
