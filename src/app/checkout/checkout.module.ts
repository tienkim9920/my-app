import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    MainComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
  ]
})
export class CheckoutModule { }
