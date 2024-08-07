import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { Subscription } from 'rxjs';
import { Item } from '../../_model/item.model';
import { ProductService } from '../_service/api/product.service';

@Component({
  selector: 'app-categoty-content',
  standalone: true,
  imports: [MeterialModule, CategoryItemComponent],
  templateUrl: './categoty-content.component.html',
  styleUrl: './categoty-content.component.css'
})
export class CategotyContentComponent implements OnInit, OnDestroy {
  @Input() categoryId!: number;

  itemList: Item[] = [];

  tab: any;
  subscriptions: Subscription = new Subscription();

  constructor(
    private productService : ProductService,
  ){}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.subscriptions.add(this.productService.getItems(this.categoryId).subscribe(res => {
      if (res) {
        this.itemList = res;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
