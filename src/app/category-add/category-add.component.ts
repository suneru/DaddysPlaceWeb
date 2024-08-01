import { Component, OnInit } from '@angular/core';
import { MasterService } from '../_service/master.service';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CategotyContentComponent } from '../categoty-content/categoty-content.component';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [MeterialModule, CategotyContentComponent],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit {
  categoryList: { id: number, name: string }[] = [
    { "id": 0, "name": "pizza" },
    { "id": 1, "name": "kottu" },
    { "id": 2, "name": "rice" }
  ];

  constructor(
    private service: MasterService
  ){}
  // postData !: posts ;
  ngOnInit(): void {
    this.LoadInitialData();

  }
  LoadInitialData() {
    // this.service.getAll().subscribe(item => { this.postData = item;
    console.log('check');
  }




}
