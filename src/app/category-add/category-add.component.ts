import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../_service/master.service';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CategotyContentComponent } from '../categoty-content/categoty-content.component';
import { CategoryService } from '../_service/api/category.service';
import { Category } from '../../_model/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [MeterialModule, CategotyContentComponent],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit, OnDestroy {

  categoryList: Category[] = [];
  countOfCategories!: number;
  subscriptions: Subscription = new Subscription();

  constructor(
    private service: MasterService,
    private categoryService: CategoryService
  ) { }


  // postData !: posts ;
  ngOnInit(): void {
    this.LoadInitialData();

  }
  LoadInitialData() {
    this.categoryService.getCategories().subscribe(res => {
      if (res) {
        this.countOfCategories = res.countofCategories;
        this.categoryList = res.allCategories;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
