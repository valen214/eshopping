import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { PRODUCTS_DATA } from 'src/app/services/products-data.service';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  get product_cart(){
    return this.productCartService.product_cart;
  }
  get total(){
    let total = 0;
    for(let { product, quantity } of this.product_cart){
      total += product.price * quantity
    }
    return total;
  }

  constructor(
    private productCartService: ProductCartService
  ){}

  ngOnInit(): void {
    // dev
    this.productCartService.add(PRODUCTS_DATA[0], 1);
  }

}
