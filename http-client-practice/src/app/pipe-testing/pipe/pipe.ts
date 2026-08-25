import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { KebabCasePipe } from '../custom-pipe/KebabCasePipe';
import { MyCustomTransformationPipe } from '../custom-pipe/MyCustomTransformationPipe';
import { JoinNamesInpurePipe } from '../custom-pipe/JoinNamesInpurePipe';

@Component({
  imports: [
    CurrencyPipe,
    TitleCasePipe,
    DatePipe,
    UpperCasePipe,
    KebabCasePipe,
    MyCustomTransformationPipe,
    JoinNamesInpurePipe,
  ],
  selector: 'app-pipe',
  styleUrl: './pipe.css',
  templateUrl: './pipe.html',
})
export class Pipe {
  productName = 'Computer';
  firstName = 'Arkar';
  lastName = 'Hein';
  amount = 2000;
  purchaseOn = '2026-08-25';
  isAdmin = true;

  fruites = ['apple', 'banana', 'pineapple'];
}
