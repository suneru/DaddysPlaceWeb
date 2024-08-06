import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../_service/api/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  ItemsArray: any[] = [];

  ProductObj: any = {
    Name:"",
    Price:"",
    Discount:"",
    Image:"",
    Category:""     
   }
 
   constructor(private http:HttpClient,private productService: ProductService)
 {
 }

 ngOnInit() {
  this.productService.getProductData().subscribe((res: any[]) => {
    this.ItemsArray = res;
  });
 }

 deleteItem(itemId: number)
 {
  this.http.delete<any>(`${environment.apiUrl}api/Product/Delete/${itemId}`)
    .subscribe(
      data => {
        alert('Item deleted successfully');
        this.productService.getProductData().subscribe((res: any[]) => {
          this.ItemsArray = res;
        });         
      },
      error => {
        console.error('Error deleting item', error);
        // Handle the error here
      }
    );
 }

 onProductAdd()
 { 
  this.http.post(`${environment.apiUrl}api/Product/Add`,(this.ProductObj)).subscribe(
    (res:any) => {
      if(res)
      {        
        alert("Product Add Successful");
        this.clearForm();     
        this.productService.getProductData().subscribe((res: any[]) => {
          this.ItemsArray = res;
        });         
      }
    
    })
 }
 

 clearForm(){
  (<HTMLFormElement>document.getElementById("ProductDetails")).reset();
 }


}


