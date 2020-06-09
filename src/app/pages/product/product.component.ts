import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
    console.log("product cart ngOnInit()");
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log("product cart ngOnChanges()");
  }
  isCartEmpty(){
    return this.product_cart.length === 0;
  }
  getCartLength(){
    return this.product_cart.length;
  }


  
  get addToCartButtonText(){
    if(this.invalidQuantity){
      return "Invalid Quantity";
    }
    let text = "Add " + this.quantity + " to Cart";
    for(let p_info of this.product_cart){
      if(p_info.product.id === this.productId){
        text += ` (${p_info.quantity} already in Cart)`;
        break;
      }
    }
    return text;
  }
  get purchaseButtonText(){
    if(this.invalidQuantity){
      return "Invalid Quantity";
    }
    let extra = ""
    let len: number = this.product_cart.length;
    switch(len){
    case 0:
      extra = "(No Product in Cart)"
      break;
    case 1:
      extra = "(1 product in Cart)"
      break;
    default:
      extra = `(${len} products in Cart)`
      break;
    }
    return "Check out " + extra;
  }

  get product_cart(){
    return this.productCartService.product_cart;
  }
  
  addToCart(){
    this.productCartService.add(this.product, this.quantity);
  }
  buy(): void {
    this.router.navigate(
        ["/check-out"],
        { relativeTo: this.route });
  }
}
