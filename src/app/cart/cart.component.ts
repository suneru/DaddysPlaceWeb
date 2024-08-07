import { CartDataService } from './../_service/data/cart.data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CommonModule } from '@angular/common';
import { BillService } from '../_service/api/bill.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MeterialModule, CommonModule,RouterLink, RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy  {

  subscriptions: Subscription = new Subscription();

  constructor(
    public cartDataService: CartDataService,
    private billService: BillService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.getNewOrderNoData();
  }

  getNewOrderNoData() : void {
    this.subscriptions.add(this.billService.getNewOrderNoData().subscribe((res: any) => {
      this.cartDataService.billOrderNo = res.billOrderNo;
    }));
  }

  letsPay(): void{
    this.router.navigate(['/order']);
  }

  printKOT(): void{
    this.router.navigate(['/kotPrint']);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
