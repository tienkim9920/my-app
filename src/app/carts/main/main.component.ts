import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CartsLocal from 'src/app/LocalStorage/carts.store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  carts: any

  total: any

  count: any

  showMessage: boolean = true

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  // lifecyle DoCheck dùng để gọi lại khi có 1 đối tượng tác động
  ngDoCheck(){
    
    if (localStorage.getItem('carts') !== null) {
      this.carts = JSON.parse(localStorage.getItem('carts') || '[]')
    } else {
      localStorage.setItem('carts', JSON.stringify([]))
    }

    this.totalCart(this.carts, 0, 0)

    this.checkingCart()

    console.log("Check")

  }

  handlerDatHang(){

    if (!this.showMessage){
      return
    }

    this.router.navigate(['/checkout'])
  }

  checkingCart(){

    if (this.carts.length > 0){
      this.showMessage = true
    }else{
      this.showMessage = false
    }

  }

  // Hàm tính tổng
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

  upCount(id: any, value: any){

    const data = {
      id_product: id,
      count: value + 1
    }

    CartsLocal.updateProduct(data)

  }

  downCount(id: any, value: any){

    if (value === 1){
      return
    }

    const data = {
      id_product: id,
      count: value - 1
    }

    CartsLocal.updateProduct(data)

  }
  
}
