import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';
import { Product } from 'src/app/services/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product_list: Product[];

  constructor(
    private productDataService: ProductsDataService,
  ){}

  ngOnInit(): void {
    this.product_list = this.productDataService.getProductList();
  }
}
