import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule)
  },
  {
    path: '', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: '', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
