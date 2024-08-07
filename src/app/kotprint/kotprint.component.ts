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
   this.openPDF()
  }

   public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');

    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('KOT.pdf');
    });
  }

}
