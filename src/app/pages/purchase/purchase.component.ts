import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product, ProductsDataService } from 'src/app/services/products-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  quantityFormControl = new FormControl(this.quantity, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/^\d+$/),
  ]);
  quantityMatcher = new QuantityErrorStateMatcher();

  currency: string = "HKD $ ";

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

  log(...args){ console.log(...args); }
}
