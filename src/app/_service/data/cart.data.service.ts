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
  public billOrderNo: number = 0;
  public paymentType: number | null = null;
  public pay: number = 0;
  public refund: number = 0;

  constructor() { }

  passToCart(data: Item): void {
    const index = this.cart.findIndex(item => item.id === data.id);
    const id = data.id;
    const name = data.name;
    const price = data.price;
    const image = data.image;
    const discount = data.discount ?? 0;
    const discountedPrice = price-(price*discount);
    const totalItemPrice = discountedPrice;

    if (index !== -1) {
      this.cart[index].quantity += 1;
      this.cart[index].totalItemPrice = discountedPrice * this.cart[index].quantity;
    } else {
      this.cart.push({ id, name, price, image, discount, quantity: 1, discountedPrice, totalItemPrice });
    }
    this.cartFee += discountedPrice;
  }

  passToRemoveFromCart(id: number): void {
    const itemIndex = this.cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      const item = this.cart[itemIndex];
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalItemPrice = item.discountedPrice * item.quantity;
      } else {
        this.cart.splice(itemIndex, 1);
      }
      this.cartFee -= item.discountedPrice;
    }
  }

  itemCategorize(): void {

  }

  resetParams(): void {
    this.cart = []
    this.catagorizedCart = []
    this.cartTotal = 0
    this.cartFee = 0
    this.billOrderNo = 0
    this.paymentType = null
    this.pay = 0
    this.refund = 0
  }




}
