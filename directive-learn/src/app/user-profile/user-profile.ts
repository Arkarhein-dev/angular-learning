import { Component, inject } from '@angular/core';
import { AppHighlight } from '../directive/app-highlight';
import { Highlight } from '../directive/highlight2';
import { Hover } from '../directive/hover';
import { Hover2 } from '../directive/hover2';
import { Delay } from '../structural-directive/delay';
import { CounterService } from '../services/counter-service';
import { CartModel, CartService } from '../services/cart-service';

@Component({
  imports: [AppHighlight, Highlight, Hover, Hover2, Delay],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  protected counterService = inject(CounterService);
  protected cartService = inject(CartService);

  color = '';

  items: CartModel[] = [
    {
      id: 1,
      productName: 'laptop',
      quantity: 2,
    },
    {
      id: 2,
      productName: 'phone',
      quantity: 5,
    },
    {
      id: 3,
      productName: 'ps5',
      quantity: 5,
    },
  ];

  getCartQuantity(cartId: number): number {
    const totalStock = this.items.find((item) => item.id === cartId)?.quantity || 0;
    const quantityInCart =
      this.cartService.cart().find((cartItem) => cartItem.id === cartId)?.quantity || 0;
    return totalStock - quantityInCart;
  }
}
