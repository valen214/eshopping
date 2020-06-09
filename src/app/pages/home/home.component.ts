import { Component, OnInit } from '@angular/core';
import {ProductsDataService
} from '../../services/products-data.service';
import {
  ResizeListenerService
} from 'src/app/resize-listener/resize-listener.service';
import { Product } from 'src/app/services/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product_list: Product[];
  category: string = "";

  constructor(
    private productDataService: ProductsDataService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if(this.category){
        this.product_list = this.productDataService
        .getProductList().filter(p => {
          let include = false;
          if(p.tags && p.tags.includes(this.category)){
            include = true;
          }
          return include;
        });
      } else{
        this.product_list = this.productDataService.getProductList();
      }
    });
  }
}
