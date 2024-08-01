import { CartDataService } from './../_service/data/cart.data.service';
import { Component, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MeterialModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  constructor(
    public cartDataService: CartDataService,
  ){}

  ngOnInit(): void {

  }




}
