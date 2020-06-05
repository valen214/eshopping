import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/services/Product';

@Component({
  selector: 'customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss']
})
export class CustomerReviewComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
