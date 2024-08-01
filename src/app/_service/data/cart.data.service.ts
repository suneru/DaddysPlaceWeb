import { Injectable } from '@angular/core';
import { Item } from '../../../_model/item.model';
import { ItemCart } from '../../../_model/itemCart.model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  public cart: ItemCart[] = [];
  public catagorizedCart: Item[] = [];
  public cartTotal: number = 0;
  public cartFee: number = 0;

  constructor() { }

  passToCart(data: Item): void {
    const index = this.cart.findIndex(item => item.id === data.id);
    const id = data.id;
    const name = data.name;
    const price = data.price;
    const image = data.image;
    const discount = data.discount ?? 0;
    const discountedPrice = price-(price*discount);

    if (index !== -1) {
      this.cart[index].quantity += 1;
    } else {
      this.cart.push({ id, name, price, image, discount, quantity: 1, discountedPrice });
    }
    this.cartFee += discountedPrice;
  }

  passToRemoveFromCart(id: number): void {
    const itemIndex = this.cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      const item = this.cart[itemIndex];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cart.splice(itemIndex, 1);
      }
      this.cartFee -= item.discountedPrice;
    }
  }

  itemCategorize(): void {

  }




}
