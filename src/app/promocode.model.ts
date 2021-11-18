export class PromoCode {
  code: string;
  discountPercent: number;
  constructor(code: string, discountPercent: number) {
    this.code = code;
    this.discountPercent = discountPercent;
  }
}
