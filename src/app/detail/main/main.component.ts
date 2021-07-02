import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Import 2 thằng này vào để bắt đầu việc truy vấn dữ liệu
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  id: any

  product: any

  sizes: any

  clickSize: string = "M"

  count: number = 1

  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    
    this.product = this.getDetail(this.id)
    
    this.sizes = this.getSize(this.id)

  }

  // Đối với chi tiết thì phải return về 1 object
  getDetail(value: any){
    return this.db.object('/product/' + value).valueChanges().subscribe(res => {
      this.product = res
    })
  }

  // Đối với list thì không cần
  getSize(value: any){
    this.db.list('/size', ref => ref.orderByChild(`idProduct`).equalTo(value)).valueChanges().subscribe(res => {
      this.sizes = res
    })
  }

  changeSize(value: string){
    this.clickSize = value
  }

  countUp(value: any){
    this.count = value + 1
  }

  countDown(value: any){
    if (this.count === 1){
      return
    }
    this.count = value - 1
  }

  valueChange(value: any){
    this.count = value
  }

}
