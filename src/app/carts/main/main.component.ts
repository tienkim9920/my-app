import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  carts: any

  total: any

  count: any

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    
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

  
}
