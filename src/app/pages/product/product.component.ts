import { Component, OnInit, Input } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { Product } from 'src/app/services/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId: string;
  product: Product;

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
}
