import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { ItemsService } from '../_service/api/items.service';
import { Subscription } from 'rxjs';
import { Item } from '../../_model/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoty-content',
  standalone: true,
  imports: [MeterialModule, CategoryItemComponent],
  templateUrl: './categoty-content.component.html',
  styleUrl: './categoty-content.component.css'
})
export class CategotyContentComponent implements OnInit, OnDestroy {
  @Input() categoryId!: number;

  itemList: Item[] = [
    // { "id": 0, "name": "pizza", "price": 752.00, "discount": 0, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" },
    // { "id": 1, "name": "kottu", "price": 865.00, "discount": null, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" },
    // { "id": 2, "name": "rice", "price": 645.00, "discount": 0.06, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" },
    // { "id": 3, "name": "nasi", "price": 1050.00, "discount": 0.5, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" },
    // { "id": 4, "name": "mi-goreng", "price": 1563.00, "discount": 0.24, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" },
    // { "id": 5, "name": "kiri bath", "price": 250.00, "discount": 0.15, "image": "https://yt3.googleusercontent.com/w5ls-zGHOJYlOOYIi6K_9Hjjbh2XGoM2SYFvL8KuOrk8BJ8G_XFW8d2lYjjd4Gq9INwsARLk0Q=s900-c-k-c0x00ffffff-no-rj" }
  ];

  tab: any;
  subscriptions: Subscription = new Subscription();

  constructor(
    private itemsService : ItemsService,
  ){}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.subscriptions.add(this.itemsService.getItems(this.categoryId).subscribe(res => {
      if (res) {
        this.itemList = res;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
