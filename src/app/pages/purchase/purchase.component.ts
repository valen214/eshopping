import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  ProductCartService,
  ProductCartItem
} from 'src/app/services/product-cart.service';
import { Product } from 'src/app/services/Product';

/** Error when invalid control is dirty, touched, or submitted. */
export class QuantityErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null,
        form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid);
  }
}
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurchaseComponent implements OnInit {

  productId: string;
  product: Product;

  quantity: number = 1;
  invalidQuantity: boolean = false;

  currency: string = "HKD $ ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsDataService,
    private productCartService: ProductCartService,
  ){}

  get purchaseButtonText(){
    if(this.invalidQuantity){
      return "Invalid Quantity";
    }
    let quantity_and_price_string =
      `Buy ${this.quantity} for ${this.currency} ` +
      `${this.product.price * this.quantity}`;
    let extra_message = "";
    let cart = this.productCartService.product_cart.filter(
      (p: ProductCartItem) => {
        return p.product.id !== this.product.id
      }
    );
    if(cart.length >= 1){
      extra_message = " and check out " +
        `${cart.length} other items in cart`
    }
    return quantity_and_price_string + extra_message
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.product = this.productService.getProductById(this.productId);

      if(!this.product){
        this.router.navigate(["page-not-found"]);
      }
    });
  }

  addToCart(){
    this.productCartService.add(this.product, this.quantity);
  }

  buy(): void {
    this.router.navigate(["/checkout"]);
  }

  log(...args){ console.log(...args); }
}
