import { Component, computed, signal } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { CustomListComponent } from '../custom-list-component/custom-list-component';
import { ProductListComponent } from "../product-list-component/product-list-component";

@Component({
  selector: 'app-home',
  imports: [HousingLocation, CustomListComponent, ProductListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  location = signal('Yangon');
  size = signal(20);

  sizeUpdated = computed(() => this.size() + 20);
  locationUpdate = computed(() => this.location.set('Mandalay'));
  isValidHome = signal(false);

  isAdmin = signal(true);

  // list array
  fruits: Array<string> = ['apple', 'orange', 'banana'];

  clickButton() {
    this.isAdmin.update(() => !this.isAdmin());
  }

  showHomeInfo() {
    console.log(`Location : ${this.location()}, Size : ${this.size()}`);
  }
}
