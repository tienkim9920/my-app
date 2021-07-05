import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { 'path': 'checkout', component: MainComponent },
  { 'path': 'success', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
