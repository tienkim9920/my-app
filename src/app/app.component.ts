import { Component, Directive } from '@angular/core';

// @Directive({
//   selector: 
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  subCart = false

  showSubCart(value: any){
    this.subCart = !value
    console.log(this.subCart)
  }


}
