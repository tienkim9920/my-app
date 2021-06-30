import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ShowcartsDirective } from './showcarts.directive';

import { StoreModule } from '@ngrx/store';
import { showmenuReducer } from './redux/showmenu.reducer'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyBpKGIKcJPski1Rg_c0LvE_qQz0asBqVxA",
  authDomain: "todo-app-tienkim.firebaseapp.com",
  databaseURL: "https://todo-app-tienkim.firebaseio.com",
  projectId: "todo-app-tienkim",
  storageBucket: "todo-app-tienkim.appspot.com",
  messagingSenderId: "513400048747",
  appId: "1:513400048747:web:b062ff959830acf0ef752e",
  measurementId: "G-X1ZCS5H953"
}

@NgModule({
  declarations: [
    AppComponent,
    ShowcartsDirective,
  ],
  imports: [
    [BrowserModule, StoreModule.forRoot({ statusMenu: showmenuReducer })],
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
