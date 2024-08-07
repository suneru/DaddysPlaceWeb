import { CartDataService } from './../_service/data/cart.data.service';
import { Component, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CommonModule } from '@angular/common';
import { BillService } from '../_service/api/bill.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MeterialModule, CommonModule,RouterLink, RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
 
  public billOrderNo: any[] = [];
  
  constructor(public cartDataService: CartDataService,private billService: BillService){}

  ngOnInit(): void {
    this.billService.getNewOrderNoData().subscribe((res: any[]) => {
      this.billOrderNo = res;
    });
  }

  letsPay(): void{
    console.log("let's pay");

  }

  



}
