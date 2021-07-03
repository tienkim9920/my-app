import { Component, OnInit } from '@angular/core';

//Import 2 thằng này vào để bắt đầu việc truy vấn dữ liệu
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  slideConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]        
  };

  items: any

  constructor(public db: AngularFireDatabase, private http: HttpClient) {

  }

  ngOnInit(): void {
    
    this.items = this.getData()

  }

  // Lấy danh sách sản phẩm
  getData(){
    // this.db.list('/product').valueChanges().subscribe(res => {
    //   this.items = res
    // })

    this.db.list('/product').snapshotChanges().subscribe(res => {
      this.items = res
    })
  }

}
