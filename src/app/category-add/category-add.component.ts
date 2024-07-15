import { Component, OnInit } from '@angular/core';
import { MasterService } from '../_service/master.service';
import { posts } from '../../_model/posts';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit {
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
