import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  invoice: any

  id: any

  products: any

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {

    this.invoice = this.getInvoice(this.id)

    this.products = this.getProduct(this.id)

  }


  getInvoice(value: any){
    return this.db.object(`/order/${value}`).valueChanges().subscribe(res => {
      this.invoice = res
    })
  }

  getProduct(value: any){
    this.db.list('/orderDetail', ref => ref.orderByChild('idOrder').equalTo(value)).valueChanges().subscribe(res => {
      this.products = res
    })
  }


}
