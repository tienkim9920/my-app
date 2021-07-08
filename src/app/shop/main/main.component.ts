import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: any = []

  searchProduct: any

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.getPrduct()
  }

  getPrduct(){
    this.db.list('/product').snapshotChanges().subscribe(res => {
      this.products = res
    })
  }



  // getProducts(){
  //   this.http.get(`https://tienkim9920.herokuapp.com/api/Product/scoll/page?page=${this.page}&count=4&search=T`).subscribe(res => {
  //     this.products = res
  //   })
  // }

  // onScroll() {
    
  //   this.isLoading = true

  //   setTimeout(() => {
  //     if (this.isLoading){
  //       this.page = this.page + 1
  //       this.http.get(`https://tienkim9920.herokuapp.com/api/Product/scoll/page?page=${this.page}&count=4&search=T`).subscribe(res => {
  //         this.products = this.products.concat(res)
  //       })
  //     }

  //     this.isLoading = false
  //   }, 3000)
  // }
  
}
