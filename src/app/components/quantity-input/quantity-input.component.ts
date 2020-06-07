import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { QuantityErrorStateMatcher } from 'src/app/pages/purchase/purchase.component';


@Component({
  selector: 'quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class QuantityInputComponent implements OnInit {

  @Input() quantity: number | string = 1;
  quantityFormControl = new FormControl(this.quantity, [
    Validators.required,
    Validators.min(1),
    Validators.pattern(/^\d+$/),
  ]);
  quantityMatcher = new QuantityErrorStateMatcher();

  @Output() invalidQuantityChange = new EventEmitter();
  @Output() quantityChange = new EventEmitter();
  
  @Input() size: number | string = 1;

  get inputStyleString(){
    let size: number | string = this.size;
    return "";
    if(typeof size === "number"){
      size = size.toString() + "em";
    }
    return `height: calc(${size} * 2); ` +
           `line-height: calc(${size} * 2);` +
           `font-size: ${size}; margin-top: -${size};`;
  }

  get labelStyle(){
    let quantity_empty = this.quantity === ""
    let height = quantity_empty ? "100%" : "10px";
    return {
      color: this.quantityFormControl.invalid ? (
          "red" ) : undefined,
      "font-size": quantity_empty ? (
          undefined ) : ( "0.5em" ),
      height,
      "line-height": height,
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.quantityFormControl.registerOnChange(() => {
      this.invalidQuantityChange.emit(
        this.quantityFormControl.invalid
      );
    });
  }

  onInput(event: InputEvent){
    this.quantity = (event.target as HTMLInputElement).value
    this.quantityFormControl.setValue(this.quantity);
    this.quantityChange.emit(this.quantity);
  }
  onSelectClick(quantity: number){
    this.quantity = quantity;
    this.quantityFormControl.setValue(this.quantity);
    this.quantityChange.emit(this.quantity);
  }
}
