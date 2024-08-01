import { Component, Input, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { Item } from '../../_model/item.model';
import { CommonModule } from '@angular/common';
import { CartDataService } from '../_service/data/cart.data.service';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [MeterialModule, CommonModule],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent implements OnInit {

  @Input() item!: Item;

  constructor(
    private cartDataService: CartDataService,
  ) { }

  ngOnInit(): void {

  }

  addToCart() {
    this.cartDataService.passToCart(this.item);
  }

}
