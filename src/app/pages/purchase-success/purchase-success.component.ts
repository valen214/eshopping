import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/Product';
import { ProductCartService } from 'src/app/services/product-cart.service';


@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.scss']
})
export class PurchaseSuccessComponent implements OnInit {
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
        // this.router.navigate(["page-not-found"]);
      }
    });
    this.productCartService.clear();
  }
}
