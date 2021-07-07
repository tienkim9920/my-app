import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {

  statusInvoice: string = '1'

  invoice: any

  showInvoice: any

  page: number = 1

  count: number = 2

  search: any

  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {

    if (localStorage.getItem('admin') === null || localStorage.getItem('admin') !== 'MdtvB5dTeaJJxZsf8vA'){
      this.router.navigate(['/admin/login'])
    }

    this.invoice = this.getAllInvoice(this.statusInvoice)

  }

  getAllInvoice(value: any){

    this.db.list('/order', ref => ref.orderByChild('status').equalTo(value)).snapshotChanges().subscribe(res => {
      this.invoice = res.reverse()
    })

  }

  clickInvoice(value: any){
    this.statusInvoice = value

    this.invoice = this.getAllInvoice(value)
  }

  handlerConfirm(value: any){
    this.db.object(`/order/${value}`).update({ status: '2' });
  }

  handlerCancel(value: any){
    if (confirm('Bạn có muốn xóa đơn hàng không')) {
      console.log(value);
    } else {
      console.log('Hủy xóa');
    }
  }

}
