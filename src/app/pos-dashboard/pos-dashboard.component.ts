import { Component } from '@angular/core';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-pos-dashboard',
  standalone: true,
  imports: [CategoryAddComponent, CartComponent],
  templateUrl: './pos-dashboard.component.html',
  styleUrl: './pos-dashboard.component.css'
})
export class PosDashboardComponent {

}
