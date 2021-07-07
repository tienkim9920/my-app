import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  carts: any

  count: any

  feeShip: number = 15000

  total: any

  listDistrict: any

  selectCity: any = '79'

  selectDistrict: any

  fullname: any

  email: any

  phone: any

  address: any

  errorName: boolean = false
  errorEmail: boolean = false
  errorPhone: boolean = false
  errorAddress: boolean = false
  errorDistrict: boolean = false

  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
    
    this.listDistrict = this.getListDistrict()

    if (localStorage.getItem('carts') !== null) {
      this.carts = JSON.parse(localStorage.getItem('carts') || '[]')
    } else {
      localStorage.setItem('carts', JSON.stringify([]))
    }

    if (this.carts.length < 1){
      this.router.navigate(['/carts'])
    }

    this.totalCart(this.carts, 0, 0)

  }

  handlerOrder(){

    if (this.validation()){
      return
    }

    const data = {
      id: Math.random().toString(),
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      address: this.address + ", " + this.selectDistrict + ", Thành phố Hồ Chí Minh",
      total: (this.total + this.feeShip).toString(),
      status: "1",
      create_time: `${new Date().getDate()}/${Number(new Date().getMonth()) + 1}/${new Date().getFullYear()}`
    }

    this.db.list('/order').push(data)

    for (let i = 0; i < this.carts.length; i++){
      
      const orderDetail = {
        name: this.carts[i].name_product,
        price: this.carts[i].price,
        size: this.carts[i].size,
        count: this.carts[i].count,
        idProduct: this.carts[i].id_product,
        image: this.carts[i].image,
        idOrder: data.id
      }

      this.db.list('/orderDetail').push(orderDetail)

    }

    this.router.navigate(['/success'])

    localStorage.setItem('carts', JSON.stringify([]))

  }

  changeName(value: any){
    if (!value){
      this.errorName = true
    }else{
      this.errorName = false
    }
  }

  changeEmail(value: any){
    if (!value){
      this.errorEmail = true
    }else{
      this.errorEmail = false
    }
  }

  changePhone(value: any){
    if (!value){
      this.errorPhone = true
    }else{
      this.errorPhone = false
    }
  }

  changeAddress(value: any){
    if (!value){
      this.errorAddress = true
    }else{
      this.errorAddress = false
    }
  }

  changeDistrict(value: any){
    if (!value){
      this.errorDistrict = true
    }else{
      this.errorDistrict = false
    }
  }

  validation(){

    let flag = false

    //Validation fullname
    if (!this.fullname){
      this.errorName = true
      flag = true
    }else{
      this.errorName = false
      flag = false
    }

    //Validation email
    if (!this.email){
      this.errorEmail = true
      flag = true
    }else{
      this.errorEmail = false
      flag = false
    }

    //Validation phone
    if (!this.phone){
      this.errorPhone = true
      flag = true
    }else{
      this.errorPhone = false
      flag = false
    }

    //Validation address
    if (!this.address){
      this.errorAddress = true
      flag = true
    }else{
      this.errorAddress = false
      flag = false
    }

    //Validation district
    if (!this.selectDistrict){
      this.errorDistrict = true
      flag = true
    }else{
      this.errorDistrict = false
      flag = false
    }

    //Validation Check
    if (flag){
      return true
    }

    return false
  }

  totalCart(carts: any, count: any, price: any){

    carts.map((value: any) => {
      count += value.count
      price += value.price * value.count
    })
    
    this.count = count
    this.total = price 
  }

  getListDistrict(){
    this.db.list('/district', ref => ref.orderByChild('city').equalTo(this.selectCity)).valueChanges().subscribe(res => {
      this.listDistrict = res
    })
  }


}
