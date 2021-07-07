import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any

  password: any

  errorUsername: boolean = false
  errorPassword: boolean = false

  checkUsername: boolean = false
  checkPassword: boolean = false

  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
  }

  changeUsername(value: any){
    if (!value){
      this.errorUsername = true
    }else{
      this.errorUsername = false
    }
  }

  changePassword(value: any){
    if (!value){
      this.errorPassword = true
    }else{
      this.errorPassword = false
    }
  }

  handlerLogin(){

    if (this.validation()){
      return
    }

    if (this.username !== 'diengiaan202'){
      this.checkUsername = true
    }else{
      if (this.password !== '202123'){
        this.checkUsername = false
        this.checkPassword = true
      }else{
        
        localStorage.setItem('admin', 'MdtvB5dTeaJJxZsf8vA')

        this.router.navigate(['/admin/invoice'])

      }
    }

  }

  validation(){

    let flag = false

    if (!this.username){
      this.errorUsername = true
      flag = true
    }else{
      this.errorUsername = false
      flag = false
    }

    if (!this.password){
      this.errorPassword = true
      flag = true
    }else{
      this.errorPassword = false
      flag = false
    }

    if (flag){
      return true
    }

    return false
  }

}
