import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/services/Product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductCardComponent implements OnInit {

  @Input() className: string;
  @Input() product: Product;
  @Input() width: any;
  @Input() height: any;
  @Input() style: { [klass: string]: any; } = {};

  currency: String = "HKD $ ";

  constructor() { }

  ngOnInit(): void {
  }

}
