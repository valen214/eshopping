import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product, ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurchaseComponent implements OnInit {

  productId: string;
  product: Product;

  currency: string = "HKD $ ";

  selectedQuantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsDataService
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

  buy(): void {
    this.router.navigate(["..", "purchase-success"], { relativeTo: this.route });
  }
}
