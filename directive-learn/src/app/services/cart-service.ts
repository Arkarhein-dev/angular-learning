import { Service, signal } from '@angular/core';

export interface CartModel {
  id: number;
  productName: string;
  quantity: number;
}

@Service()
export class CartService {
  private cartSignal = signal<CartModel[]>([]);

  cart = this.cartSignal.asReadonly();

  addTocart(cartItem: CartModel) {
    if (cartItem.quantity > 0) {
      this.cartSignal.update((currentCart) => {
        const existingItem = currentCart.find((item) => item.id === cartItem.id);
        if (existingItem) {
          return currentCart.map((item) =>
            item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }
        return [...currentCart, { ...cartItem, quantity: 1 }];
      });
    }
  }

  removeFromCart(cartId: number) {
    this.cartSignal.update((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === cartId);
      // check if quantity is greater than 1
      if (existingItem && existingItem.quantity > 1) {
        return currentCart.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }
      // only one quantity
      return currentCart.filter((cartItem) => cartItem.id != cartId);
    });
  }

  resetCart() {
    this.cartSignal.set([]);
  }
}
