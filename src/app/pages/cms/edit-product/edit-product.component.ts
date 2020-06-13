import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
/*
https://dev.to/mustapha/angular-build-
more-dynamic-components-with-ngtemplateoutlet-3nee
*/
  idFormControl = new FormControl();
  get id_template_context(){
    return { $implicit: {
      name: 'id',
      formControl: this.idFormControl,
      label_invalid: 'Invalid ID',
      label_valid: "Product ID",
      value: this.productId
    }}
  }
  nameFormControl = new FormControl();
  get name_template_context(){
    return { $implicit: {
      name: 'name',
      formControl: this.nameFormControl,
      label_invalid: 'Invalid Product Name',
      label_valid: "Product Name",
      value: this.product?.name
    }}
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productDataService: ProductsDataService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      if(this.productId){
        this.product = this.productDataService.getProductById(
            this.productId);
      }

    });
  }

  save(){
    this.router.navigate(["/cms"]);
    if(this.product){

    } else{
      this.productDataService.addProduct({
        name: this.nameFormControl.value,
      });
    }
  }

  onInput(event: InputEvent){
    console.log(event)
  }
}
