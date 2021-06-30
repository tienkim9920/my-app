import { Component, OnInit } from '@angular/core';
declare var firebase: any

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  title = 'ng-carousel-demo';
  
  slides = [
    {img: "https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/noubakery%2Fblueberry_cheesecake.jpg?alt=media&token=33ff9813-008e-4b7a-b9dc-c59a5f9f38fe"},
    {img: "https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/noubakery%2Fchoco.jpg?alt=media&token=4baf093e-718a-4386-a7f7-764bbc7e6b50"},
    {img: "https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/noubakery%2Foreo.jpg?alt=media&token=f470b00c-7206-4807-8de0-2484742418c9"},
    {img: "https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/noubakery%2Foreo_cake.jpg?alt=media&token=436431d0-440a-4c47-b45a-4379ffbec6e5"},
    {img: "https://firebasestorage.googleapis.com/v0/b/todo-app-tienkim.appspot.com/o/noubakery%2Foreo_cheese_cake.jpg?alt=media&token=ff16b834-ed9b-48c1-a982-811d04d24603"},
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

  constructor() { }

  ngOnInit(): void {

    this.fetchData()

  }

  fetchData(){
    firebase.database().ref('/').on('child_added', (snapshot: any) => {
      console.log(snapshot)
    })
  }

}
