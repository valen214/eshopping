import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-home',
  templateUrl: './cms-home.component.html',
  styleUrls: ['./cms-home.component.scss']
})
export class CmsHomeComponent implements OnInit {

  constructor(
    private productDataService: ProductsDataService,
    private router: Router,
  ){}

  getProductList(){
    return this.productDataService.getProductList();
  }

  ngOnInit(): void {

  }

  addNewProduct(){
    let id = this.productDataService.addProduct();
    this.router.navigate(["/cms", "edit-product", id]);
  }
}
