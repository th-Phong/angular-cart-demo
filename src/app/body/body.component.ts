import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input()
  products: Product[] = [];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();

  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      inputElement.value = -intValue + '';
    } else if (value.length > 2) {
      inputElement.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({
      id,
      quantity: parseInt(inputElement.value) || '',
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
