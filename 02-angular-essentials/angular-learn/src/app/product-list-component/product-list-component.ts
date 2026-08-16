import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products = signal<Product[]>([
    { id: 1, name: 'phone', price: 20000 },
    { id: 2, name: 'mouse', price: 3000 },
    { id: 3, name: 'macbook', price: 340000000 },
  ]);
}
