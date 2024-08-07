import { BillService } from './../_service/api/bill.service';
import { ItemsService } from './../_service/api/items.service';
import { CartDataService } from './../_service/data/cart.data.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MeterialModule } from '../../_module/Meterial.Module';
import { PaymentTypeService } from '../_service/api/payment-type.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../_service/api/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MeterialModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit, AfterViewInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  paymentType: any[] = [];
  form!: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;
  paymentTypeName!: string;


  displayedColumns: string[] = ['itemId', 'name', 'eachPrice', 'discount', 'price', 'quantity', 'totalItemPrice'];
  userId!: string | null;

  constructor(
    private paymentTypeService: PaymentTypeService,
    public cartDataService: CartDataService,
    private cdr: ChangeDetectorRef,
    private itemsService: ItemsService,
    private billService: BillService,
    private paymentService: PaymentService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem('UserId');
    this.loadMethodOfPayments();
    this.crateForm();
  }

  ngAfterViewInit() {

  }

  methodOfPaymentChange() {
    this.cartDataService.paymentType = this.form.get('MethodOfPayment')?.value;
    this.paymentTypeName = this.paymentType.find(x => x.id == this.cartDataService.paymentType).paymentType;
    if (this.paymentTypeName == "DebitCard") {
      this.form.get('Pay')?.setValue(this.cartDataService.cartFee);
      this.payChange();
      this.form.updateValueAndValidity();
    } else {
      this.form.get('Pay')?.setValue(null);
      this.form.updateValueAndValidity();
      this.payChange();
    }
    this.cdr.detectChanges();
  }

  crateForm(): void {
    this.form = this.formBuilder?.group({
      MethodOfPayment: [null, Validators.required],
      Pay: [0, Validators.required],
    });
  }

  loadMethodOfPayments(): void {
    this.subscriptions.add(this.paymentTypeService.getPaymentTypes().subscribe((res) => {
      if (res) {
        this.paymentType = res;
      }
    }));
  }

  payChange() {
    this.cartDataService.pay = this.form.get('Pay')?.value;
    this.cartDataService.refund = this.cartDataService.pay - this.cartDataService.cartFee;
  }

  payingSelected() {
    const nowDate: Date = new Date();
    this.addCart();
    this.addBill(nowDate);
    this.addPayment();
  }

  addCart(): void {
    const cart = this.cartDataService.cart.map(item => {
      return {
        id: 0,
        discount: item.discount,
        quanlity: item.quantity,
        price: item.discountedPrice,
        frn_ProductId: item.id,
        frn_OrderId: this.cartDataService.billOrderNo
      }
    });
    this.subscriptions.add(this.itemsService.add(cart).subscribe((res) => {
      if (res) {
        console.warn(res);
        console.log("success");
        this.cartDataService.resetParams();
        this.router.navigate(['/pos-dashboard']);
      }
    }));
  }

  addBill(nowDate: Date): void {
    const bill = {
      id: 0,
      createOn: nowDate,
      frn_UserId: Number(this.userId),
      frn_PaymentId: this.cartDataService.paymentType,
      frn_OrderId: this.cartDataService.billOrderNo,
      totalAmount: this.cartDataService.cartFee,
    };
    this.subscriptions.add(this.billService.add(bill).subscribe((res) => {
      if (res) {
        console.warn(res);
        console.log("success");
      }
    }));
  }

  addPayment(): void {
    const payment = {
      id: 0,
      receive_Amount: this.cartDataService.pay,
      balance_Amount: this.cartDataService.refund,
      payment_Type: this.cartDataService.paymentType,
      frn_OrderId: this.cartDataService.billOrderNo,
    };
    this.subscriptions.add(this.paymentService.add(payment).subscribe((res) => {
      if (res) {
        console.warn(res);
        console.log("success");
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
