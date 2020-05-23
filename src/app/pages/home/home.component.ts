import { Component, OnInit } from '@angular/core';
import { ProductsDataService, Product } from '../../services/products-data.service';
import { ResizeListenerService } from 'src/app/resize-listener/resize-listener.service';

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
