import { Component, ViewChild } from '@angular/core';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'e-commerce';
  user: string = 'Melis Özdemir';

}
