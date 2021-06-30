import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  title = 'ng-carousel-demo';
  
  slides = [
    {img: "https://firebasestorage.googleapis.com/v0/b/image-file.appspot.com/o/oreo_cake.jpg?alt=media&token=3a5a29b7-a744-4b6d-a01e-03c1d5e5e869"},
    {img: "https://firebasestorage.googleapis.com/v0/b/image-file.appspot.com/o/oreo_cheese_cake.jpg?alt=media&token=7ef90322-6823-4269-ac6f-5c0efef53f3c"},
    {img: "https://firebasestorage.googleapis.com/v0/b/image-file.appspot.com/o/passion_fruit_cheese_cake.jpg?alt=media&token=ecc06887-e0e4-406a-b03f-5114adbcadbf"},
    {img: "https://firebasestorage.googleapis.com/v0/b/image-file.appspot.com/o/strawberry_jelly.jpg?alt=media&token=bc1ccb2b-fb5e-42c7-b774-29b2e22de4de"},
    {img: "https://firebasestorage.googleapis.com/v0/b/image-file.appspot.com/o/tiramisu.jpg?alt=media&token=b5c83c54-71cc-4f55-9779-7b3cc5d97f22"},
  ];
  
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

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('product').valueChanges();
  }

  ngOnInit(): void {
    
  }


}
