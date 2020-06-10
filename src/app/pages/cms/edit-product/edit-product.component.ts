import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { Product } from 'src/app/services/Product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId: string;
  product: Product;

  idFormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsDataService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.product = this.productService.getProductById(this.productId);

      if(!this.product){
        console.error("product with id:",
            this.productId, "does not exist");
      }
    });
  }

  save(){

  }

  onInput(event: InputEvent){
    console.log(event)
  }
}
