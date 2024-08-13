import { CartDataService } from './../_service/data/cart.data.service';
import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import {jsPDF } from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-kotprint',
  standalone: true,
  imports: [],
  templateUrl: './kotprint.component.html',
  styleUrl: './kotprint.component.css'
})
export class KotprintComponent  implements OnInit{

   constructor(
    public cartDataService: CartDataService,
   ) {}
   @ViewChild('htmlData')
  htmlData!: ElementRef;
  
  ngOnInit(): void {
   
  }

  

}
