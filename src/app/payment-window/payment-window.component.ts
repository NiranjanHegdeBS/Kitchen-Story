import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/Payment';
import {FormBuilder, FormGroup, NgModel, Validators} from '@angular/forms';
import { of } from 'rxjs';
import { Transcation } from '../model/transcation';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css']
})
export class PaymentWindowComponent {

  

  constructor(private _formBuilder : FormBuilder, private _pay : TransactionService) { }
  submitted = false;
  paymentForm!: FormGroup;

  transcation : Transcation = new Transcation();

  years :any = [];

  months :any = [];

  ngOnInit(): void {
    console.log(history.state.data);
    this.transcation.total = history.state.data.amount;
    this.transcation.item_name = history.state.data.name;
    this.transcation.quantity = history.state.data.quantity;
    this.paymentForm = this._formBuilder.group({
      name : ['',Validators.required],
      amount : [this.transcation.total],
      cardNumber : ['',[Validators.required,Validators.max(999999999999)]],
      months:['',Validators.required],
      years:['',Validators.required],
      cvv:['',Validators.required]
    }) 

    of(this.getMonths()).subscribe(months=>{
      this.months = months;
    })

    of(this.getYears()).subscribe(years=>{
      this.years = years;
    })
  }

  
  getMonths(){
    return [
      {name: 'January', value: 'Jan'},
      {name: 'Febraury', value: 'Feb'},
      {name: 'March', value: 'Mar'},
      {name: 'April', value: 'Apr'},
      {name: 'May', value: 'May'},
      {name: 'June', value: 'Jun'},
      {name: 'July', value: 'Jul'},
      {name: 'August', value: 'Aug'},
      {name: 'September', value: 'Sept'},
      {name: 'October', value: 'Oct'},
      {name: 'November', value: 'Nov'},
      {name: 'December', value: 'Dec'},
  
    ];
  }

  getYears(){
    return [
      {name: '2021', value: '2021'},
      {name: '2022', value: '2022'},
      {name: '2023', value: '2023'},
      {name: '2024', value: '2024'},
      {name: '2025', value: '2025'},
    ];
  }
  get f(){
    return this.paymentForm.controls;
  }

  check(){
   //console.log(this.years);
    
  }

  resetForm(){
    this.submitted = false;
    this.paymentForm.reset();
  }

  payment(){
    this.submitted = true;
    this.transcation.cardNumber = this.paymentForm.getRawValue().cardNumber;
    if(this.paymentForm.invalid) return;
    this._pay.addPayments(this.transcation.item_name,this.transcation.quantity,this.transcation).subscribe(res=>{
      console.log(res);
      
    })
    this.resetForm();
  }
  
}
