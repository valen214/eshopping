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
  // unbind default is ""
  @Input() hideCheckoutButton: boolean = false;


  isQuantityForProductInvalid = {}

  get styleObj(){
    return {
      width: this.width,
      height: this.height,
    }
  }

  constructor(
    public productCartService: ProductCartService,
  ){}

  get product_cart(){
    return this.productCartService.product_cart;
  }

  ngOnInit(): void {}

  onInvalidQuantityChange(
      product_id: string,
      invalid: boolean){
    this.isQuantityForProductInvalid[product_id] = invalid;
  }
  onQuantityChange(product_info: ProductCartItem, quantity: string){
    if(!this.isQuantityForProductInvalid[product_info.product.id]){
      this.productCartService.setQuantityForProduct(
          product_info.product.id, parseInt(quantity, 10));
    }
  }

  deleteItem(product: Product){
    this.productCartService.removeProduct(product);
  }
}
