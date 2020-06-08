import { Component, OnInit, Input } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCartService, ProductCartItem } from 'src/app/services/product-cart.service';
import { Product } from 'src/app/services/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.product = this.productService.getProductById(this.productId);
      if(!this.product){
        this.router.navigate(["page-not-found"]);
      }
    });
  }

  isCartEmpty(){
    return this.productCartService.product_cart.length === 0;
  }
  getCartLength(){
    return this.productCartService.product_cart.length;
  }


  

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

  
  addToCart(){
    this.productCartService.add(this.product, this.quantity);
  }
  buy(): void {
    this.router.navigate(
        ["/product", this.productId, "purchase-success"],
        { relativeTo: this.route });
  }
}
