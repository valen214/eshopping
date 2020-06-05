import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/app/services/product-cart.service';

@Component({
  selector: 'user-panel-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public productCartService: ProductCartService
  ){}

  ngOnInit(): void {
  }
}
