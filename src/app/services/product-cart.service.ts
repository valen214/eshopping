import { Injectable } from '@angular/core';
import { Product } from './Product';

export type ProductCartItem = {
  product: Product,
  quantity: number
}


@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  public product_cart: ProductCartItem[] = []

  constructor(){}

  getTotal(){
    let total = 0;
    for(let item of this.product_cart){
      total += item.product.price * item.quantity
    }
    return total;
  }


  add(product: Product, quantity: number){
    this.product_cart.push({
      product, quantity
    });
    console.log("product_cart:", this.product_cart);
  }

  removeProduct(product: Product){
    for(let [index, item] of this.product_cart.entries()){
      if(item.product === product){
        this.product_cart.splice(index, 1);
        break;
      }
    }
  }
}
