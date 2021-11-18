import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  promoCode!: string;
  @Input()
  subTotal!: number;
  @Input()
  tax!: number;
  @Input()
  discount!: number;

  @Output() onApplyPromoCode = new EventEmitter();

  applyPromoCode() {
    const code = this.promoCode;

    if (code && code.trim() !== '') {
      this.onApplyPromoCode.emit(code);
    }
  }
}
