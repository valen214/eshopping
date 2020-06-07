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


  add(product: Product, quantity: number | string){
    let existing = false;
    if(typeof quantity === "string"){
      quantity = parseInt(quantity, 10);
    }
    for(let i = 0; i < this.product_cart.length; ++i){
      if(this.product_cart[i].product.id === product.id){
        this.product_cart[i].quantity += quantity;
        existing = true;
      }
    }
    if(!existing){
      this.product_cart.push({
        product, quantity
      });
    }
    console.log("product_cart:", this.product_cart);
  }

  removeProduct(product: Product){
    for(let [index, item] of this.product_cart.entries()){
      if(item.product.id === product.id){
        console.assert(item.product === product,
            "ProductCartService: removeProduct(product)" +
            " product is not the same object");
        this.product_cart.splice(index, 1);
        break;
      }
    }
  }
}
