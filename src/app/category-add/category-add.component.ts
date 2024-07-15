import { Component, OnInit } from '@angular/core';
import { MasterService } from '../_service/master.service';
import { MeterialModule } from '../../_module/Meterial.Module';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [MeterialModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit {
  lotsOfTabs = new Array(10).fill(0).map((_, index) => `Tab ${index}`);
  constructor(private service: MasterService) {

  }
  // postData !: posts ;
  ngOnInit(): void {
    this.LoadInitialData();

  }
  LoadInitialData() {
    // this.service.getAll().subscribe(item => { this.postData = item;
    console.log('check');
  }




}
