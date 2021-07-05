import { Component } from '@angular/core';
import CartsLocal from './LocalStorage/carts.store';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  // statusMenu$: Observable<any>;
 
  // constructor(private store: Store<{ statusMenu: any }>) {
  //   this.statusMenu$ = store.select('statusMenu');
  // }

  carts: any

  total: any

  count: any

  ngOnInit() {
    if (localStorage.getItem('carts') !== null) {
      this.carts = JSON.parse(localStorage.getItem('carts') || '[]')
    } else {
        localStorage.setItem('carts', JSON.stringify([]))
    }

    this.totalCart(this.carts, 0, 0)
  }

  ngAfterContentChecked(){
    
    if (localStorage.getItem('carts') !== null) {
      this.carts = JSON.parse(localStorage.getItem('carts') || '[]')
    } else {
        localStorage.setItem('carts', JSON.stringify([]))
    }

    this.totalCart(this.carts, 0, 0)
  }

  totalCart(carts: any, count: any, price: any){

    carts.map((value: any) => {
      count += value.count
      price += value.price * value.count
    })
    
    this.count = count
    this.total = price 
  }

  deleteCart(value: any){

    CartsLocal.deleteProduct(value)

  }

}
