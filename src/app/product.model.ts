export class Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  quantity: number;
  constructor(
    id: number,
    name: string,
    price: number,
    thumbnail: string,
    description: string,
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.thumbnail = thumbnail;
    this.description = description;
    this.quantity = quantity;
  }
}
